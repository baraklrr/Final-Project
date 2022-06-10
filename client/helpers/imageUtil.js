export function generateImageForm(imagePath) {
  const form = new FormData();
  form.append('image', {
    name: 'SomeImageName.jpg',
    type: 'image/jpg',
    uri: imagePath,
  });
  return form;
}
export const uploadImage = async (formData) => {
  let URL_Endpoint =
    Platform.OS === 'ios'
      ? 'http://localhost:8080/uploadImage'
      : 'http://10.0.2.2:8080/uploadImage';

  const fetchResponse = await fetch(URL_Endpoint, {
    headers: {
      'Content-Type': `multipart/form-data`,
    },
    method: 'POST',
    body: formData,
  });
  const data = await fetchResponse.json();
  return data.path;
};
