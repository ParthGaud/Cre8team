"use client";

import Button from "@/components/Button";
import { Project } from "@/types";
import Container from "@/components/Container";
import React, { useContext, useEffect, useState } from "react";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "@/utils/firebase";
import { userContext } from "../hooks/useUser";
import { useRouter } from "next/navigation";

interface DashboardClientProps {
  projects?: Project[] | null;
}

const DashboardClient: React.FC<DashboardClientProps> = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const context = useContext(userContext);
  const user = context?.user;
  const router = useRouter();
  useEffect(() => {
    if (!user) return;

    const getProjects = async () => {
      const ref = query(
        collection(db, "projects"),
        where("user_id", "==", user?.uid as string)
      );
      const data: Project[] = [];
      const documents = await getDocs(ref);
      documents.forEach((doc) => {
        data.push(doc.data() as Project);
      });
      setProjects(data);
    };
    getProjects();
  }, [user]);

  if (!user) {
    router.push("/login");
  }

  if (user && projects.length === 0) {
    return (
      <Container>
        <div className="text-sm text-neutral-500 flex items-center justify-center h-[60vh] w-full">
          You have no projects
        </div>
      </Container>
    );
  }

  if (user) {
    return <Container>projects</Container>;
  }
};
export default DashboardClient;
