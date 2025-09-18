import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;

export function getPlaceholderImage(id: string): ImagePlaceholder {
    const image = PlaceHolderImages.find((img) => img.id === id);
    if (!image) {
        // Fallback or error
        return {
            id: 'fallback',
            description: 'Fallback image',
            imageUrl: `https://picsum.photos/seed/fallback/500/500`,
            imageHint: 'placeholder'
        }
    }
    return image;
}
