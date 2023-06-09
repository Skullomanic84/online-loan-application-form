import Head from 'next/head';
import Image from "next/image";
import styles from"@/styles/Custom.module.css";
import Link from 'next/link';




export default function Home() {
  return (
    <>
      <Head>
        <title>African Bank | Online Loan Application Form</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <Image
            src="/logo.svg"
            alt="African bank logo"
            width={435}
            height={112}
            className={styles.center}
            priority
          />
        </div>
        <div>
          <p className="text-[58px] text-[#88BC47] font-[800] mb-2">
            Easy. Quick. Apply now!
          </p>
          <p className="text-[#FFFFFF] font-[800] text-[29px]">
            Get an instant quote in quick
            <Link
              href="/form"
              className="mb-1 border-[#1E9FF2] border-b-4 border-l-0 border-r-0 border-t-0"
            >
              {" "}
              5 steps
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
