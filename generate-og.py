#!/usr/bin/env python3
"""Generate a 1200x630 Open Graph image for carloscomacho.com"""

from PIL import Image, ImageDraw, ImageFont
import os, math

HERE   = os.path.dirname(os.path.abspath(__file__))
PUBLIC = os.path.join(HERE, 'public')
FONTS  = '/usr/share/fonts/truetype/dejavu'

def font(name, size):
    return ImageFont.truetype(os.path.join(FONTS, name), size)

# ── Colour palette (matches the website) ──────────────────────────────────────
BG         = (23,  23,  23)   # neutral-900
WHITE      = (255, 255, 255)
GREY_700   = (163, 163, 163)  # neutral-400 — "Camacho"
GREY_500   = (156, 163, 175)  # "Registered Psychologist"
GREY_400   = (107, 114, 128)  # credentials row
GREY_300   = ( 82,  82,  82)  # tagline / url
GREY_200   = ( 64,  64,  64)  # tagline sub / divider
GREY_100   = ( 38,  38,  38)  # faint dots

W, H = 1200, 630
PHOTO_W = 530  # photo occupies right 530px

# ── Canvas ────────────────────────────────────────────────────────────────────
canvas = Image.new('RGB', (W, H), BG)
draw   = ImageDraw.Draw(canvas)

# ── Subtle dot grid (matches website's StatewideMap feel) ─────────────────────
for y in range(12, H, 24):
    for x in range(12, W, 24):
        draw.ellipse([x-1, y-1, x+1, y+1], fill=GREY_100)

# ── Photo (right side) ────────────────────────────────────────────────────────
photo = Image.open(os.path.join(PUBLIC, 'carlos-axiom.jpg'))

# Scale to fill PHOTO_W × H (cover-style) keeping top (face)
scale = max(PHOTO_W / photo.width, H / photo.height)
pw = math.ceil(photo.width  * scale)
ph = math.ceil(photo.height * scale)
photo = photo.resize((pw, ph), Image.LANCZOS)

# Crop: horizontally centre, vertically top-align (face)
left   = (pw - PHOTO_W) // 2
photo  = photo.crop((left, 0, left + PHOTO_W, H))

# Build a horizontal alpha mask: transparent on left edge → opaque
# This creates the dissolve between dark bg and photo
FADE_W = 260
mask = Image.new('L', (PHOTO_W, H), 0)
mask_draw = ImageDraw.Draw(mask)
for x in range(FADE_W):
    alpha = int(255 * (x / FADE_W) ** 1.6)   # eased curve for natural feel
    mask_draw.line([(x, 0), (x, H)], fill=alpha)
for x in range(FADE_W, PHOTO_W):
    mask_draw.line([(x, 0), (x, H)], fill=255)

canvas.paste(photo, (W - PHOTO_W, 0), mask)

# ── Vignette: dark gradient at bottom for tagline legibility ──────────────────
vignette = Image.new('RGBA', (W, 180), (0, 0, 0, 0))
vd = ImageDraw.Draw(vignette)
for i in range(180):
    alpha = int(180 * (i / 180) ** 2)
    vd.line([(0, i), (W, i)], fill=(23, 23, 23, alpha))
canvas.paste(Image.new('RGB', (W, 180), BG), (0, H - 180),
             vignette.split()[3])

# ── Re-draw so text goes on top ───────────────────────────────────────────────
draw = ImageDraw.Draw(canvas)

# ── Typography ────────────────────────────────────────────────────────────────
PAD_L = 72

# — URL label
f_label = font('DejaVuSans.ttf', 12)
draw.text((PAD_L, 54), 'CARLOSCOMACHO.COM', font=f_label, fill=GREY_300,
          spacing=4)

# — "Carlos" (white, light weight)
f_name = font('DejaVuSans-ExtraLight.ttf', 90)
draw.text((PAD_L - 2, 118), 'Carlos', font=f_name, fill=WHITE)

# — "Camacho" (muted grey)
draw.text((PAD_L - 2, 218), 'Camacho', font=f_name, fill=GREY_700)

# — Divider rule
draw.rectangle([PAD_L, 328, PAD_L + 52, 330], fill=GREY_200)

# — "Registered Psychologist"
f_title = font('DejaVuSans.ttf', 22)
draw.text((PAD_L, 346), 'Registered Psychologist', font=f_title, fill=GREY_500)

# — Credentials
f_cred = font('DejaVuSans.ttf', 13)
draw.text((PAD_L, 388), 'AHPRA  ·  SIRA Accredited  ·  30+ Years  ·  English & Spanish',
          font=f_cred, fill=GREY_400)

# — Tagline (italic serif)
f_italic = font('DejaVuSerif-Italic.ttf' if os.path.exists(
    os.path.join(FONTS, 'DejaVuSerif-Italic.ttf')) else 'DejaVuSans-Oblique.ttf', 20)
draw.text((PAD_L, 540), '\u201cPat Yourself on the Back\u201d', font=f_italic, fill=GREY_300)

# — Tagline sub
f_sub = font('DejaVuSans.ttf', 13)
draw.text((PAD_L, 572), 'Founder of the movement  ·  Sydney, NSW', font=f_sub, fill=GREY_200)

# ── Save ──────────────────────────────────────────────────────────────────────
out = os.path.join(PUBLIC, 'og-image.png')
canvas.save(out, 'PNG', optimize=True)
print(f'✓ OG image saved → {out}  ({W}×{H})')
