import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";

export const getImageUrl = async (imageName: string): Promise<string> => {
  try {
    const imageRef = ref(storage, `images/${imageName}`);
    const url = await getDownloadURL(imageRef);
    return url;
  } catch (error) {
    console.error('Error fetching image URL:', error);
    throw new Error('No se pudo obtener la URL de la imagen');
  }
};