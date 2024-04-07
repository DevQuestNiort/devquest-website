import { Footer } from "@/components/Footer/Footer";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { PropsWithChildren } from 'react';


const SessionLayout = ({ children , params: {title}}: PropsWithChildren<{params: {title:string}}>) => <>
    <PageHeader title={title} />
    <main>
        {children}
    </main>
    <Footer/>
</>;

export default SessionLayout;