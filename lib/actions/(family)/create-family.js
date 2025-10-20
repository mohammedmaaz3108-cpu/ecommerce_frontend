"use server";

export async function createFamily(formData) {
  try {
    const response = await fetch(`${process.env.SERVER_URL}/family`, {
      cache: "no-cache",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
