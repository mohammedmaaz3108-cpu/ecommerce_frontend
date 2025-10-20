"use server";

export async function fetchFamily() {
  try {
    const response = await fetch(`${process.env.SERVER_URL}/family`, {
      cache: "no-cache",
      method: "GET",
    });
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
