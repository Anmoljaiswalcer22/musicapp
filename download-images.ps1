# Create courses directory if it doesn't exist
New-Item -ItemType Directory -Force -Path "public/courses"

# Define image URLs and their corresponding filenames
$images = @{
    "guitar.jpg" = "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=1000&q=80"
    "piano.jpg" = "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=1000&q=80"
    "vocal.jpg" = "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1000&q=80"
    "drums.jpg" = "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=1000&q=80"
    "jazz.jpg" = "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1000&q=80"
    "production.jpg" = "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=1000&q=80"
    "songwriting.jpg" = "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1000&q=80"
    "electronic.jpg" = "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=1000&q=80"
    "classical.jpg" = "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=1000&q=80"
    "blues.jpg" = "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?w=1000&q=80"
}

# Download each image
foreach ($image in $images.GetEnumerator()) {
    $outputPath = "public/courses/$($image.Key)"
    Write-Host "Downloading $($image.Key)..."
    Invoke-WebRequest -Uri $image.Value -OutFile $outputPath
    Write-Host "Downloaded $($image.Key) successfully!"
} 