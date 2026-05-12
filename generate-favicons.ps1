Add-Type -AssemblyName System.Drawing

$projectRoot = "d:\Faizan Khan Pathan Khan's\Tech Career New Version\tech-career-final-version.vercel.app"
$srcImage = Join-Path $projectRoot "public\favicon.png"
$publicDir = Join-Path $projectRoot "public"

$src = [System.Drawing.Image]::FromFile($srcImage)
Write-Output "Source: $($src.Width) x $($src.Height)"

function Save-SquareFavicon {
    param(
        [System.Drawing.Image]$src,
        [int]$size,
        [string]$outPath,
        [System.Drawing.Color]$bgColor = [System.Drawing.Color]::White
    )

    $bmp = New-Object System.Drawing.Bitmap($size, $size)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

    $g.Clear($bgColor)

    $padding = [int]($size * 0.12)
    $maxDim = $size - (2 * $padding)
    $srcRatio = $src.Width / $src.Height

    if ($srcRatio -ge 1) {
        $targetWidth = $maxDim
        $targetHeight = [int]($maxDim / $srcRatio)
    } else {
        $targetHeight = $maxDim
        $targetWidth = [int]($maxDim * $srcRatio)
    }

    $offsetX = [int](($size - $targetWidth) / 2)
    $offsetY = [int](($size - $targetHeight) / 2)

    $g.DrawImage($src, $offsetX, $offsetY, $targetWidth, $targetHeight)
    $g.Dispose()

    $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    Write-Output "Saved: $outPath ($size x $size)"
}

Save-SquareFavicon -src $src -size 16 -outPath (Join-Path $publicDir "favicon-16x16.png")
Save-SquareFavicon -src $src -size 32 -outPath (Join-Path $publicDir "favicon-32x32.png")
Save-SquareFavicon -src $src -size 48 -outPath (Join-Path $publicDir "favicon-48x48.png")
Save-SquareFavicon -src $src -size 96 -outPath (Join-Path $publicDir "favicon-96x96.png")
Save-SquareFavicon -src $src -size 192 -outPath (Join-Path $publicDir "favicon-192x192.png")
Save-SquareFavicon -src $src -size 512 -outPath (Join-Path $publicDir "favicon-512x512.png")
Save-SquareFavicon -src $src -size 180 -outPath (Join-Path $publicDir "apple-touch-icon.png")

$src.Dispose()
Write-Output "Done."
