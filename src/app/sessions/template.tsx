import { Footer } from "@/components/Footer/Footer";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { PropsWithChildren } from 'react';

import { promises as fs } from "fs";
import * as model from '@/model/Session'


const SessionLayout = ({ children }: PropsWithChildren<{}>) => <>
    <PageHeader title={"Speakers"} />
    <main>
        {children}
    </main>
    <Footer/>
</>;

export default SessionLayout;