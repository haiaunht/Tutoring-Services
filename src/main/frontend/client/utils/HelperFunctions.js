export const setAppStyleToNone = () => {
  const appContainer = document.getElementById("app");
  appContainer.style.cssText = ``;
};

export const getData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok && response.status !== 404) {
      const errorMessage = `${data.status} (${data.message})`;
      const error = new Error(errorMessage);
      throw error;
    }
    return data;
  } catch (err) {
    console.error(`Error in fetch: ${err.message}`);
  }
};

export const postData = async (url, formPayload) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formPayload),
    });
    if (!response.ok) {
      if (response.status === 422) {
        return await response.json();
      } else {
        throw new Error(response.status);
      }
    }
  } catch (error) {
    console.error(`Error in fetch: ${error.message}`);
  }
  return {};
};

export const isEmailValid = (email) => {
  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log(regex.test(email));
  return regex.test(email);
};
