import styles from "@/app/faq/faq.module.scss";
import Image from "next/image";
import Markdown from "react-markdown";
import { QuestionReponse } from "@/model/QuestionReponse";

interface QuestionReponseProperties
  extends React.ComponentPropsWithoutRef<"a"> {
  readonly questionReponse: QuestionReponse;
}
const BulleQuestionReponse = ({
  questionReponse,
}: QuestionReponseProperties) => {
  return (
    <div className={styles.faqQR}>
      <span className={styles.emphaseleft}>L&apos;aventurier dit :</span>
      <div className={styles.faqQuestion}>
        <Image
          height={80}
          width={80}
          alt="wizard"
          src="/icons-rp/archer.png"
          aria-hidden="true"
        />
        <span>
          {" "}
          <Markdown>{questionReponse.question}</Markdown>
        </span>
      </div>
      <span className={styles.emphaserigth}>Le grand mage répond :</span>
      <div className={styles.faqQuestion}>
        <span>
          <Markdown>{questionReponse.reponse}</Markdown>
        </span>
        <Image
          height={80}
          width={80}
          alt="wizard"
          src="/icons-rp/wizard.png"
          aria-hidden="true"
        />
      </div>
      <div className={styles.separator}></div>
    </div>
  );
};

export default BulleQuestionReponse;
