import React, { ReactElement } from 'react'

// ↓↓↓↓IMPORTANDO REACT ICONS ↓↓↓↓
// ↓↓↓↓IMPORTING REACT ICONS↓↓↓
import {
  AiFillCheckSquare,
  AiOutlineCloudDownload,
  AiOutlineAreaChart,
} from 'react-icons/ai'
import {
  BiSolidHappyAlt,
  BiSolidMobileVibration,
  BiServer,
} from 'react-icons/bi'
import {
  BsBriefcaseFill,
  BsFillPersonCheckFill,
  BsPersonFillExclamation,
  BsFillTelephoneForwardFill,
  BsFillPeopleFill,
  BsChatSquareHeartFill,
  BsCodeSquare,
} from 'react-icons/bs'
import {
  FaMapMarkerAlt,
  FaPortrait,
  FaPeopleArrows,
  FaBusinessTime,
} from 'react-icons/fa'

import { TbMailSearch } from 'react-icons/tb'
import { HiDocumentText } from 'react-icons/hi'

import { MdWorkspacePremium, MdSecurity } from 'react-icons/md'
import { PiStrategyDuotone } from 'react-icons/pi'
import {
  MdOutlinePeople,
  MdCodeOff,
  MdSettingsApplications,
} from 'react-icons/md'
import { BsDatabaseFillUp, BsRocketTakeoff } from 'react-icons/bs'
import { SiOracle, SiFuturelearn } from 'react-icons/si'
import { SlPeople } from 'react-icons/sl'
import { GrHostMaintenance } from 'react-icons/gr'

//Usei imagens aleatorias, as imagens usadas no comentário abaixo não existem mais no projeto.

import RH1 from '@/assets/images/travelServicesImages/image_travel_1.png'
import RH2 from '@/assets/images/travelServicesImages/image_travel_1.png'
import RH3 from '@/assets/images/travelServicesImages/image_travel_1.png'
import RH4 from '@/assets/images/travelServicesImages/image_travel_1.png'
import RH5 from '@/assets/images/travelServicesImages/image_travel_1.png'
import RH6 from '@/assets/images/travelServicesImages/image_travel_1.png'

// import RH1 from '@/assets/imagesRecruitmentServices/recruitment_hero1.jpg'
// import RH2 from '@/assets/imagesRecruitmentServices/recruitment_hero2.jpg'
// import RH3 from '@/assets/imagesRecruitmentServices/recruitment_hero3.jpg'
// import RH4 from '@/assets/imagesRecruitmentServices/recruitment_hero4.jpg'
// import RH5 from '@/assets/imagesRecruitmentServices/recruitment_hero5.jpg'
// import RH6 from '@/assets/imagesRecruitmentServices/recruitment_hero6.jpg'

// ↑↑↑↑↑ IMPORTANDO REACT ICONS ↑↑↑↑↑
// ↑↑↑↑↑ IMPORTING REACT ICONS ↑↑↑↑↑

export const heroImages = [
  {
    id: 1,
    image: RH1,
  },
  {
    id: 2,
    image: RH2,
  },
  {
    id: 3,
    image: RH3,
  },
  {
    id: 4,
    image: RH4,
  },
  {
    id: 5,
    image: RH5,
  },
  {
    id: 6,
    image: RH6,
  },
]

export const recruitmentCardText = [
  {
    id: 1,
    title: 'Assertividade no Processo de Seleção:',
    text: 'Nossa equipe especializada em contratação entende suas necessidades e identifica o talento que melhor se encaixa nelas, garantindo um processo seletivo mais preciso e eficaz.',
  },

  {
    id: 2,
    title: 'Acesso a Talentos Experientes:',
    text: 'Amplie suas opções de recrutamento ao ter acesso a profissionais altamente qualificados que podem contribuir com expertise e experiência únicas para seus projetos.',
  },
  {
    id: 3,
    title: 'Redução de Custos Operacionais:',
    text: 'Manter uma equipe interna pode ser dispendioso. Com o outsourcing estratégico, você economiza em despesas fixas e pode alocar recursos de maneira mais eficiente.',
  },
  {
    id: 4,
    title: 'Flexibilidade Escalável:',
    text: 'Conforme suas demandas variam, você pode dimensionar sua equipe rapidamente, adicionando ou reduzindo talentos de acordo com a necessidade do momento.',
  },
]

export const ourServicesText = [
  {
    id: 1,
    title: 'Equipe Sob Medida:',
    text: 'Não importa o tamanho do projeto ou a sua complexidade. Encontramos os profissionais certos para atender às suas necessidades exclusivas.',
  },
  {
    id: 2,
    title: 'Agilidade focando na Qualidade:',
    text: 'Mantenha o ritmo acelerado do mercado sem comprometer a qualidade do trabalho. Nossos talentos externos são escolhidos para garantir um equilíbrio perfeito entre velocidade e excelência.',
  },
  ,
  {
    id: 3,
    title: 'Foco no Core Business:',
    text: 'Ao confiar em nossos especialistas para tarefas específicas, você permite que sua equipe interna se concentre no desenvolvimento do núcleo do seu negócio.',
  },
  {
    id: 4,
    title: 'Resultados Mensuráveis:',
    text: 'Nossa abordagem orientada por métricas garante que os resultados sejam tangíveis e mensuráveis, permitindo que você acompanhe o sucesso do projeto de perto.',
  },
]

export const recruitmentCycle = [
  {
    id: 1,
    image: <FaMapMarkerAlt />,
    text: 'Demanda de recrutamento',
  },
  {
    id: 2,
    image: <BsFillPersonCheckFill />,
    text: 'Recrutador em ação',
  },
  {
    id: 3,
    image: <BsPersonFillExclamation />,
    text: 'Entendendo a demanda',
  },
  {
    id: 4,
    image: <TbMailSearch />,
    text: 'Procura de talentos',
  },
  {
    id: 5,
    image: <HiDocumentText />,
    text: 'Filtro de currículos',
  },
  {
    id: 6,
    image: <FaPortrait />,
    text: 'Formatação de currículos',
  },
  {
    id: 7,
    image: <MdWorkspacePremium />,
    text: 'Entrevistas',
  },
  {
    id: 8,
    image: <BsFillPeopleFill />,
    text: 'Repasse de talentos',
  },
  {
    id: 9,
    image: <BsChatSquareHeartFill />,
    text: 'Agenda de entrevista',
  },
  {
    id: 10,
    image: <FaPeopleArrows />,
    text: 'Entrevista com cliente ',
  },
  {
    id: 11,
    image: <AiFillCheckSquare />,
    text: 'Contratação',
  },
  {
    id: 12,
    image: <BiSolidHappyAlt />,
    text: 'Dor sanada',
  },
]

export const specialties = [
  {
    id: 1,
    image: <AiOutlineCloudDownload size={45} />,
    title: 'Cloud Infrastructure: Soluções em Nuvem',
    text: 'Nossa equipe de especialistas em Cloud Infrastructure capacita sua empresa a migrar e gerenciar seus recursos na nuvem com eficiência e segurança, permitindo flexibilidade e escalabilidade incomparáveis.',
  },
  {
    id: 2,
    image: <BsCodeSquare size={40} />,
    title: 'Software Development: Transformando Ideias em Realidade',
    text: 'Da concepção à implementação, nossos serviços de Software Development transformam suas ideias inovadoras em soluções digitais robustas e prontas para o mercado, alinhadas às suas necessidades e objetivos.',
  },
  ,
  {
    id: 3,
    image: <PiStrategyDuotone size={40} />,
    title: 'Project Consulting: Orientação Estratégica para o Sucesso',
    text: 'Nossos serviços de Project Consulting oferecem a você a orientação estratégica necessária para planejar, executar e otimizar projetos complexos, garantindo resultados excepcionais em cada etapa',
  },
  ,
  {
    id: 4,
    image: <AiOutlineAreaChart size={40} />,
    title: 'Business Analysis: Insights Precisos, Decisões Inteligentes',
    text: 'Com foco em Business Analysis, traduzimos dados em insights acionáveis, permitindo que você tome decisões empresariais mais informadas e estratégicas, impulsionando o crescimento sustentável.',
  },
  ,
  {
    id: 5,
    image: <BiSolidMobileVibration size={40} />,
    title: 'Digital Marketing: Alcance, Engaje, Converta',
    text: 'Nossa abordagem de Digital Marketing abrange desde estratégias de mídia social até campanhas de SEO, ajudando sua marca a alcançar, engajar e converter o público-alvo em clientes leais.',
  },
  ,
  {
    id: 6,
    image: <MdOutlinePeople size={40} />,
    title: 'Advisory Services: Orientação Estratégica para o Futuro',
    text: 'Por meio de nossos Advisory Services, oferecemos orientação estratégica personalizada, ajudando sua empresa a navegar pelas mudanças do mercado e abraçar oportunidades de crescimento.',
  },
  ,
  {
    id: 7,
    image: <MdCodeOff size={40} />,
    title: 'Application Development and Management: Eficiência Contínua',
    text: 'Com foco na Application Development and Management, entregamos soluções de software de alto desempenho e oferecemos suporte contínuo para garantir a eficiência e a qualidade a longo prazo.',
  },
  ,
  {
    id: 8,
    image: <MdSettingsApplications size={40} />,
    title: 'Enterprise Application Services: Otimização Corporativa',
    text: 'Nossos Enterprise Application Services otimizam seus processos corporativos por meio de soluções personalizadas, melhorando a eficiência operacional e a colaboração em toda a organização.',
  },
  ,
  {
    id: 9,
    image: <BsDatabaseFillUp size={40} />,
    title: 'Infrastructure Services: Base Sólida para o Sucesso',
    text: 'Com nossos Infrastructure Services, fornecemos a base tecnológica sólida necessária para manter operações eficientes e seguras, garantindo que sua infraestrutura acompanhe suas ambições.',
  },
  ,
  {
    id: 10,
    image: <FaBusinessTime size={40} />,
    title: 'SAP Solutions: Potencializando com SAP',
    text: 'Nossas soluções SAP oferecem às empresas uma vantagem competitiva, permitindo uma gestão eficaz dos recursos, processos e dados essenciais para impulsionar o crescimento.',
  },
  ,
  {
    id: 11,
    image: <SiOracle size={40} />,
    title: 'Oracle Solutions: Excelência em Oracle',
    text: 'Por meio das nossas Oracle Solutions, você aproveita ao máximo as tecnologias Oracle, otimizando processos e tomando decisões informadas para atingir seus objetivos de negócios.',
  },
  ,
  {
    id: 12,
    image: <SiFuturelearn size={40} />,
    title: 'Digital Transformation: Moldando o Futuro Digital',
    text: 'Através da Digital Transformation, ajudamos sua empresa a abraçar a inovação tecnológica, adotando estratégias digitais que impulsionam a eficiência e melhoram a experiência do cliente.',
  },
  ,
  {
    id: 13,
    image: <BiServer size={40} />,
    title: 'IT Service: Mantendo a Tecnologia Funcional',
    text: 'Nossos serviços de IT garantem que sua infraestrutura tecnológica esteja funcionando sem problemas, permitindo que você se concentre no que faz de melhor: seu negócio.',
  },
  ,
  {
    id: 14,
    image: <BsRocketTakeoff size={40} />,
    title: 'Business Scalability: Crescimento sem Limites',
    text: 'Com nossas soluções de Business Scalability, você pode expandir seus negócios com confiança, sabendo que sua infraestrutura e recursos tecnológicos podem acompanhar suas ambições.',
  },

  ,
  {
    id: 16,
    image: <MdSecurity size={40} />,
    title: 'Security: Salvaguardando seus Ativos Digitais',
    text: 'Nossas soluções de segurança protegem seus ativos digitais contra ameaças cibernéticas, garantindo a confidencialidade e integridade dos dados críticos da sua empresa.',
  },
]

// commitar ###issue bka bka bak fixing navbar e afins
