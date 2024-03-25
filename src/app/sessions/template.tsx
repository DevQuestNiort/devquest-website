import { Footer } from "@/components/Footer/Footer";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { PropsWithChildren } from 'react';


const SessionLayout = ({ children }: PropsWithChildren) => <>
    <PageHeader title="Programmation" />
    <main>
        {children}
    </main>
    <Footer/>
</>;

export default SessionLayout;