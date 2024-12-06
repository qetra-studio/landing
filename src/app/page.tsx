import HelloSection from "@/app/HelloSection";
import LabeledCard from "@/components/cards/LabeledCard";
import QetraLogo from "@/components/meta/QetraLogo";
import SectionTitle from "@/components/text/SectionTitle";
import SuccessBadgeText from "@/components/text/SuccessBadgeText";
import {Metadata} from "next";
import Image from 'next/image';

export const metadata: Metadata = {
    description: "Home page of Qetra."
}

export default function Home() {
    return (
        <main className="h-full w-full">
            <HelloSection/>
            <div className='w-full px-10 md:px-40 flex flex-col gap-8'>
                <SectionTitle>
                    What Sets Us Apart?
                </SectionTitle>
                <div className={'grid grid-cols-1 xl:grid-cols-3 gap-x-4 gap-y-1 xl:gap-x-10 xl:gap-y-2 auto-rows-auto items-center'}>
                    <LabeledCard
                        label='no compromise on quality'
                        slotProps={{
                            label: {
                                className: 'rotate-3'
                            }
                        }}>We uphold quality above all else, prioritizing excellence over shortcuts or
                        cost-cutting.</LabeledCard>
                    <LabeledCard
                        label='deep it competence'
                        slotProps={{
                            label: {
                                className: '-rotate-9'
                            }
                        }}
                    >Each of us came through some real-world <s>sh</s> challenges
                        to deliver best quality for you today.</LabeledCard>
                    <LabeledCard
                        label='personally tailored solutions'
                        slotProps={{
                            label: {
                                className: 'rotate-10'
                            }
                        }}
                    >We do hear/listen to your needs. Every client is
                        unique, and so are our solutions.</LabeledCard>
                    <LabeledCard label='care is a core'
                                 slotProps={{
                                     label: {
                                         className: 'rotate-3 right-20 self-end'
                                     }
                                 }}>We speak openly and standing by our promises.</LabeledCard>
                    <LabeledCard label='competence in healthcare domain' slotProps={{
                        label: {
                            className: '-rotate-3'
                        }
                    }}>We have a proven track record of delivering
                        impactful solutions and building healthcare related IT systems.</LabeledCard>
                    <LabeledCard label='responsibility' slotProps={{
                        label: {
                            className: 'rotate-20 top-10 self-end'
                        }
                    }}>We believe in open dialogue, delivering honest feedback, and
                        keeping you in the loop at every turn.</LabeledCard>
                </div>
            </div>
        </main>
    );
}
