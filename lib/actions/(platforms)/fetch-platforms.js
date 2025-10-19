"use server";

export async function fetchPlatforms() {
  try {
    const response = await fetch("http://localhost:8080/platforms", {
      cache: "no-cache",
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
