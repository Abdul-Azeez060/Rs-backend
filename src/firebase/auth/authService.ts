import admin from "firebase-admin";

export async function signInwihtPhone(idToken: string) {
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const uid = decodedToken.uid;
    return uid;
  } catch (error) {
    console.log("firebase auth Service error", error);
  }
}
