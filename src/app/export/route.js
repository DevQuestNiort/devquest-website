import { promises as fs } from "fs";
const getSessions = async () =>
  JSON.parse(
    await fs.readFile(process.cwd() + "/src/data/sessions.json", "utf8"),
  );

const getSlots = async () =>
  JSON.parse(
    await fs.readFile(process.cwd() + "/src/data/slots.json", "utf8"),
  );

const getSpeakers = async () => JSON.parse(await fs.readFile(
  process.cwd() + "/src/data/speakers.json",
  "utf8",
));

export async function GET() {
  const speakers = (await getSpeakers());
  const slots = (await getSlots())
  const sessions = (await getSessions())
    .map((session) => ({
      ...session,
      slot: slots.find((s) => s.key === session.slot),
      speakers: session.speakersId.map(speakerId => speakers.find((s) => s.id === speakerId))
    }))
    .filter((session) => session.slot);


  const datasession = sessions.reduce((agr, session) => {
    const worksession = {
      id: session.id,
      speakers: session.speakersId,
      tags: session.tags,
      title: session.title,

      trackTitle: session.room
    }
    agr[session.id] = worksession
    return agr
  }, {})

  const dataSpeaker = speakers.reduce((agr, speaker) => {
    let name = speaker.name
    if (name === "") {
      name = "void"
    }
    const workSpeak = {
      id: speaker.id,
      name: name,
      photoUrl: "https://www.devquest.fr" + speaker.picture
    }
    agr[speaker.id] = workSpeak
    return agr
  },
    {})
  const data = { sessions: datasession, speakers: dataSpeaker }

  return Response.json( data )
}