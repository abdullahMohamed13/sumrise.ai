import { Button } from '@/components/ui/button';
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from '@/components/ui/marquee';
import { FaGithub, FaFacebook, FaGoogle, FaApple, FaInstagram, FaYoutube, FaAmazon, FaDiscord } from "react-icons/fa";
import { SiX } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

const logos = [
  { name: "GitHub", icon: FaGithub, url: "https://github.com" },
  { name: "Facebook", color: '#1877F2', icon: FaFacebook, url: "https://facebook.com" },
  { name: "X", icon: SiX, url: "https://x.com" },
  { name: "Amazon", color: '#FF9900', icon: FaAmazon, url: "https://amazon.com" },
  { name: "Apple", color: '#A2AAAD', icon: FaApple, url: "https://apple.com" },
  { name: "Google", color: '#34A853', icon: FaGoogle, url: "https://google.com" },
  { name: "Instagram", color: '#E1306C', icon: FaInstagram, url: "https://instagram.com" },
  { name: "YouTube", color: '#FF0000', icon: FaYoutube, url: "https://youtube.com" },
  { name: "Discord", color: '#5865F2', icon: FaDiscord, url: "https://discord.com" },
];

export default function Hero() {
    const navigate = useNavigate();

    return <section className="">
        <div className="text-center">
            <h2 className="text-6xl">
                <span className="text-primary">Sumrise</span> - Say it shorter. Say it smarter.
            </h2>
            <p className="text-secondary-foreground mt-2 text-xl">
                Sumrise helps you write smarter, summarize faster, and rephrase effortlessly.
                <br />
                Designed for copywriters - powered by AI.
            </p>

            <div className='flex gap-5 mt-6 mb-13 justify-center'>
                <Button variant='destructive' onClick={() => navigate('/chat')}>Try it now</Button>
                <Button variant='outline'>
                    Terms apply
                </Button>
            </div>

            {/* Hero Img */}
            <div className="mt-8 px-10 mx-auto">
                <img src="/images/hero-img.png"
                    className="rounded-2xl"
                    alt="Get it free for 1 Year"
                />
            </div>

            {/* Marquee */}
            <div className="flex flex-col gap-6 size-full mt-6 items-center justify-center">
                <p className='text-secondary-foreground'>Trusted by copywriters from leading companies</p>
                <Marquee>
                    <MarqueeFade className="from-secondary" side="left" />
                    <MarqueeFade className="from-secondary" side="right" />
                    <MarqueeContent pauseOnHover={false}>
                        {logos.map((logo) => (
                            <MarqueeItem
                            style={{ color: logo.color }}
                            className='mx-16 size-12' key={logo.name}>
                                <a href={logo.url} target="_blank" rel="noopener noreferrer">
                                    <logo.icon className="size-full" />
                                </a>
                            </MarqueeItem>
                        ))}
                    </MarqueeContent>
                </Marquee>
            </div>
        </div>
    </section>
}