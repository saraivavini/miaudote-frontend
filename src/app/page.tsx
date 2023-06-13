import { Button, Heading, Paragraph } from "@/components"
import Image from "next/image"

function Section({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`md:min-h-[80vh] px-5 md:px-32 mb-20 w-full ${className}`}>
      {children}
    </div>
  )
}

function MainSection() {
  return (
    <Section className="md:flex relative md:px-0">
      <div className="flex h-full flex-col self-center justify-center items-center mt-20 md:items-start md:flex-start md:w-1/2 md:mt-0 md:pl-32">
        <Heading className="text-[2.5rem]/[3rem] md:text-[4.5rem]/[auto] mb-6 text-primary-900 text-center md:text-left">
          Adotar é um compromisso!
        </Heading>
        <Heading level="h5" className="mb-6 text-center md:text-left">
          Insira uma frase de efeito.
        </Heading>
        <Button>
          Adote um Pet
        </Button>
      </div>
      <div className="w-full h-[300px] mt-8 rounded-3xl bg-home-banner bg-right bg-cover bg-no-repeat md:mt-0 md:bg-contain md:absolute md:-z-10 md:h-full" />
    </Section>
  )
}

function FindANewFriendSection() {
  const lastPets = [
    {
      id: 1,
      image: '',
    },
    {
      id: 2,
      image: '',
    },
    {
      id: 3,
      image: '',
    }
  ]

  return (
    <Section>
      <div className="flex flex-col md:flex-row items-center md:justify-between">
        <div className="mb-6 md:mb-0">
          <Heading level="h2" className="text-center md:text-left text-primary-900 mb-6">
            Encontre um <span className="text-primary-400">novo amigo</span>
          </Heading>
          <Paragraph variant="body-lg" className="text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium tempus fermentum.
          </Paragraph>
        </div>
        <Button>
          Ver todos
        </Button>
      </div>
      <div className="hidden md:flex justify-between mt-11">
        {lastPets.map((pet) => (
          <div key={pet.id} className="w-[500px] h-[500px] rounded-full bg-slate-400" />
        ))}
      </div>
    </Section>
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
    <Section>
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
                  <div
                    className={`flex absolute rounded-3xl py-6 px-8 bg-primary-200 bg-opacity-70 h-fit top-1/4 md:w-2/3 ${isEven ? 'end-4 md:end-48' : 'start-4 md:start-48'}`}
                  >
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
    </Section>
  )
}

function SheltersSection() {
  return (
    <Section>
      <div className="flex flex-col items-center justify-between mb-11 md:flex-row md:items-center ">
        <div className="mb-5 md:mb-0">
          <Heading level="h2" className="text-primary-900 mb-6 text-center md:text-left">
            Abrigos
          </Heading>
          <Paragraph variant="body-lg" className="text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium tempus fermentum.
          </Paragraph>
        </div>
        <Button>
          Ver todos
        </Button>
      </div>
      <div>
        <div className="flex flex-col items-center md:w-1/4">
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
    </Section>
  )
}

function AboutUsSection() {
  return (
    <Section className="flex flex-col-reverse md:flex-row md:min-h-full">
      <div className="flex-1 md:w-1/2">
        <Image src="/about-us.png" alt="About Us Banner" width={600} height={600} />
      </div>
      <div className="flex-1 mb-8 md:w-1/2 md:pl-20 md:mb-0">
        <Heading level="h2" className="text-primary-900 mb-6 text-center md:text-left">
          Sobre <span className="text-primary-400">nós</span>
        </Heading>
        <Paragraph variant="body-lg" className="text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium tempus fermentum. Integer a rutrum urna. Donec in elementum massa. Suspendisse sit amet consequat ipsum, quis molestie sapien. Integer orci diam, dignissim id finibus imperdiet, rutrum at libero. Nam malesuada porta dictum. Maecenas lectus odio, pulvinar at lacus vitae, blandit eleifend erat.
        </Paragraph>
      </div>
    </Section>
  )
}

function Footer() {
  return (
    <div className="flex py-11 border-t-2 border-primary-400 mx-5 md:mx-32 ">
      <Heading level="h4" className="mr-5 md:mr-8">
        Miaudote
      </Heading>
      <div className="flex flex-1 flex-col justify-between md:flex-row md:items-center">
        <div>
          © 2023 Miaudote
        </div>
        <div>
          Desenvolvido por José Vinícius
        </div>
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
