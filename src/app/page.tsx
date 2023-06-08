import { Button, Heading, Paragraph } from "@/components"
import Image from "next/image"


function MainSection() {
  return (
    <div className="flex h-[80vh]">
      <div className="flex flex-col w-1/2 justify-center pl-32">
        <Heading className="text-[72px]/[86px] mb-6 text-primary-900">
          Adotar é um compromisso!
        </Heading>
        <Paragraph className="mb-6">
          Insira uma frase de efeito.
        </Paragraph>
        <Button>
          Adote um Pet
        </Button>
      </div>
      <div className="flex h-[80vh] w-full absolute -z-10">
        <Image
          src="/home-banner.png"
          alt="Home banner"
          fill
          quality={100}
          style={{
            objectFit: 'contain'
          }}
        />
      </div>
    </div>
  )
}

function FindANewFriendSection() {
  return (
    <div className="px-32 pt-20 w-full">
      <div className="flex justify-between">
        <div>
          <Heading level="h2" className="text-primary-900 mb-6">
            Encontre um <span className="text-primary-400">novo amigo</span>
          </Heading>
          <Paragraph variant="body-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium tempus fermentum.
          </Paragraph>
        </div>
        <Button>
          Ver todos
        </Button>
      </div>
      <div className="flex space-x-4 justify-center mt-11">
        <div className="w-[300px] h-[300px] rounded-full bg-slate-400" />
        <div className="w-[300px] h-[300px] rounded-full bg-slate-400" />
        <div className="w-[300px] h-[300px] rounded-full bg-slate-400" />
      </div>
    </div>
  )
}

function AdoptionProccessSection() {
  const adoptionSteps = [
    {
      step: '01',
      image: '',
      title: 'Escolha um pet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium tempus fermentum.'
    },
    {
      step: '02',
      image: '',
      title: 'Entre em contato com um abrigo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium tempus fermentum.',
    },
    {
      step: '03',
      image: '',
      title: 'Leve para casa',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium tempus fermentum.'
    }
  ]

  return (
    <div className="pt-20 px-32">
      <div className="">
        <div className="flex justify-center w-full mb-12">
          <Heading level="h2" className="text-primary-900">
            Processo de <span className="text-primary-400">adoção</span>
          </Heading>
        </div>
        <div className="flex flex-col space-y-16 w-full">
          {adoptionSteps.map(step => {
            const isEven = Number(step.step) % 2 === 0;

            return (
              <div key={step.step} className="flex flex-col w-full relative">
                <div className={`flex ${isEven ? 'self-end' : ''}`} >
                  <div className="w-[300px] h-[300px] bg-slate-400 rounded-3xl">
                  </div>
                  <div className={`flex rounded-3xl py-6 px-8 bg-primary-200 bg-opacity-70 h-fit w-2/3 absolute top-1/4 ${isEven ? 'end-48' : 'start-48'}`}>
                    <div>
                      <Heading level="h1" className="text-primary-900 mr-8">
                        {step.step}
                      </Heading>
                    </div>
                    <div>
                      <Heading level="h4" className="text-primary-900 mb-6">
                        {step.title}
                      </Heading>
                      <Paragraph variant="body-lg" className="text-primary-900">
                        {step.description}
                      </Paragraph>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
          )}
        </div>
      </div>
    </div >
  )
}

function SheltersSection() {
  return (
    <div className="px-32 pt-20 w-full">
      <div className="flex justify-between mb-11">
        <div>
          <Heading level="h2" className="text-primary-900 mb-6">
            Abrigos
          </Heading>
          <Paragraph variant="body-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium tempus fermentum.
          </Paragraph>
        </div>
        <Button>
          Ver todos
        </Button>
      </div>
      <div>
        <div className="flex flex-col items-center w-1/4">
          <div className="w-[100px] h-[100px] bg-slate-200 rounded-3xl">
          </div>
          <div className="mt-4 space-y-4">
            <Heading level="h6" className="text-center">
              Marabichos
            </Heading>
            <Paragraph variant="body-lg" className="text-center">
              Marabichos é um projeto que cuida dos mais de 40 gatinhos do Campus III da Unifesspa
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  )
}

function AboutUsSection() {
  return (
    <div className="flex px-32 pt-20 pb-20 w-full">
      <div className="flex-1 w-1/2">
        <Image src="/about-us.png" alt="About Us Banner" width={600} height={600} />
      </div>
      <div className="flex-1 w-1/2 pl-20">
        <Heading level="h2" className="text-primary-900 mb-6">
          Sobre <span className="text-primary-400">nós</span>
        </Heading>
        <Paragraph variant="body-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium tempus fermentum. Integer a rutrum urna. Donec in elementum massa. Suspendisse sit amet consequat ipsum, quis molestie sapien. Integer orci diam, dignissim id finibus imperdiet, rutrum at libero. Nam malesuada porta dictum. Maecenas lectus odio, pulvinar at lacus vitae, blandit eleifend erat.
        </Paragraph>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div className="flex justify-between mx-32 py-11 border-t-2 border-primary-400 ">
      <div>
        © 2023 Miaudote
      </div>
      <div>
        Desenvolvido por José Vinícius
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <MainSection />
      <FindANewFriendSection />
      <AdoptionProccessSection />
      <SheltersSection />
      <AboutUsSection />
      <Footer />
    </main>
  )
}
