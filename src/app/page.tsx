"use client";

import Link from "./components/Link";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Home() {
  const birthday = new Date('2005-05-04');
  const age = new Date().getFullYear() - birthday.getFullYear() - (new Date() < new Date(new Date().getFullYear(), birthday.getMonth(), birthday.getDate()) ? 1 : 0);

  return (
    <>
      <title>Roozbeh Ali</title>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex relative w-4/5 h-[70vh] p-4 inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]"></div>
        <div className="flex flex-col gap-8 p-6 absolute h-[40vh] p-4 justify-center items-center text-zinc-400">
          <div className="flex flex-col gap-4 md:w-3/5 tracking-wide leading-relaxed text-zinc-400">
            <p className="text-4xl mb-4 font-medium">
              hey. i&apos;m{" "}
              <span className="text-orange-200">rooz.</span> 
            </p>
            <p>i'm a {age} year old software engineer from Toronto, 🇨🇦 with a love for math and programming.</p>
            <p>currently, i'm building <Link href="https://www.usebutler.app/">butler</Link>, taking a short break from <Link href="https://www.watonomous.ca/">watonomous</Link> and preparing for my 2A term in <Link href="https://ece.engineering/">ce at uwaterloo</Link>. previously, I was an engineer at <Link href="https://www.beavrdesign.com/">beavr labs</Link>.</p>
            <p>you can reach me via <a href="mailto:roozbeh.ali.2005@gmail.com">roozbeh.ali.2005@gmail.com</a>, or schedule a meeting with me <Link href="https://cal.com/roozbehali">here</Link>.</p>
          </div>
        </div>
        <div className="flex justify-center items-center fixed bottom-6 w-full gap-8">
          <Link href="https://www.linkedin.com/in/roozbehali/"><FaLinkedin size={20}/></Link>
          <Link href="https://www.github.com/roozbehali/"><FaGithub size={20}/></Link>
          <Link href="https://www.twitter.com/_roozbehali/"><FaTwitter size={20}/></Link>
          <Link href="https://www.instagram.com/roozbeh.05/"><FaInstagram size={20}/></Link>
        </div>
      </div>
    </>
  )
}
