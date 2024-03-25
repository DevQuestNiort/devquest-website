
import { promises as fs } from "fs";
import { SessionItem } from '../../../model/SessionItem';
import { Schedule } from "@/components/Schedule/Schedule";

type SessionProps = {
  params: {
    slug: string
  }
}

const getSessions = async () => JSON.parse(await fs.readFile(
  process.cwd() + "/src/data/sessions.json",
  "utf8",
)) as SessionItem[];

export async function generateStaticParams() {
  const sessions = await getSessions();

  return sessions.map((session) => ({ slug: session.slug, session}));
}

const Session = async ({  params: { slug } }: SessionProps) => {
  const session = (await getSessions()).find(session => slug === session.slug);

  return <Schedule/>
}

export default Session;