const { Firestore } = require('@google-cloud/firestore');
const firestore = new Firestore();

async function addToFirestore(data, documentId, collectionId) {
  try {
    const collectionRef = firestore.collection(collectionId);
    const documentRef = collectionRef.doc(documentId);
    await documentRef.set(data);
    console.log(`🔥[FIRESTORE] - ${documentId} added to ${collectionId}`);
  } catch (error) {
    throw error;
  }
}

async function removeFromFirestore(documentId, collectionId) {
  try {
    const documentRef = firestore.collection(collectionId).doc(documentId);
    await documentRef.delete();
    console.log(`🔥[FIRESTORE] - ${documentId} removed from ${collectionId}`);
  } catch (error) {
    throw error;
  }
}

async function getAllDocuments(collectionId) {
  try {
    const collection = firestore.collection(collectionId);
    return await collection.get();
  } catch (error) {
    throw error;
  }
}

async function updateFirestoreItem(collectionId, documentId, newData) {
  try {
    const docRef = firestore.collection(collectionId).doc(documentId);
    await docRef.update(newData);
    console.log(`🔥[FIRESTORE] - ${documentId} updated successfully in ${collectionId}`);
  } catch (error) {
    throw error;
  }
}


module.exports = {
  addToFirestore,
  removeFromFirestore,
  getAllDocuments,
  updateFirestoreItem
}