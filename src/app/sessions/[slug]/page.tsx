
import { promises as fs } from "fs";
import * as model from '@/model/Session'

type SessionProps = {
  params: {
    slug: string
  }
}

const getSessions = async () => JSON.parse(await fs.readFile(
  process.cwd() + "/src/data/sessions.json",
  "utf8",
)) as model.Session[];

export async function generateStaticParams() {
  const sessions = await getSessions();

  return sessions.map((session) => ({ slug: session.slug, title: session.title}));
}

const Session = async ({  params: { slug } }: SessionProps) => {
  const session = (await getSessions()).find(session => slug === session.slug);

  return <p>my session {slug}</p>
}

export default Session;