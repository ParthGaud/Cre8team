import { Project } from "@/types";
import { auth, db } from "@/utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";

const getUserProjects = async () => {
  let user_id = auth.currentUser
  console.log(user_id)


  if (!user_id) {
    return null;
  }
  const data: Project[] = [];
  const ref = query(
    collection(db, "projects"),
    where("user_id", "==", user_id)
  );
  const documents = await getDocs(ref);

  documents.forEach((doc) => {
    data.push(doc.data() as Project);
  });

  return (data as Project[]) || null;
};
export default getUserProjects;
