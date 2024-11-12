import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          hero: {
            newFeature: "New",
            experienceFuture: "Experience the future of TV",
            title: "Experience The #1",
            subtitle: "IPTV Subscription",
            endTitle: "Service Today!",
            description: "Unleash unmatched entertainment with our leading IPTV subscription service.",
            learnMore: "Learn more about IPTV",
            industry: "from the best in the industry and enjoy a seamless, high-quality viewing experience.",
            browsePlans: "Browse IPTV Plans & Pricing",
            support: "24/7 IPTV Support"
          },
          benefits: {
            whyChoose: "Why Choose Our IPTV Service?",
            costEffective: {
              title: "Cost-Effective",
              description: "More affordable than traditional cable or satellite TV packages.",
              learnMore: "Learn more about IPTV streaming technology",
              link: "View IPTV Subscription Plans"
            },
            streaming: {
              title: "High-Quality Streaming",
              description: "Enjoy crisp, high-definition video and audio quality.",
              link: "Explore HD & 4K Streaming Features"
            },
            flexible: {
              title: "Flexible Viewing",
              description: "Watch your favorite content anytime, anywhere with an internet connection.",
              link: "Learn About Multi-device Streaming"
            },
            global: {
              title: "Global Reach",
              description: "Access a wide range of international channels and content.",
              link: "Browse International Channel List"
            }
          },
          stats: {
            title: "Why Choose Us For Your",
            subtitle: "IPTV Subscription",
            description: "Experience unmatched quality and reliability with our premium IPTV service, trusted by thousands worldwide.",
            customers: "Happy Customers",
            channels: "Channels",
            sports: "Sport Channels",
            vod: "VOD & Movies"
          },
          faq: {
            title: "Got Questions?",
            subtitle: "Frequently Asked Questions",
            description: "Find answers to common questions about our IPTV service"
          }
        }
      },
      fr: {
        translation: {
          hero: {
            newFeature: "Nouveau",
            experienceFuture: "Découvrez l'avenir de la TV",
            title: "Découvrez le N°1 des",
            subtitle: "Abonnements IPTV",
            endTitle: "Dès Aujourd'hui !",
            description: "Libérez un divertissement inégalé avec notre service d'abonnement IPTV leader.",
            learnMore: "En savoir plus sur l'IPTV",
            industry: "des meilleurs de l'industrie et profitez d'une expérience de visionnage fluide et de haute qualité.",
            browsePlans: "Parcourir les forfaits et tarifs IPTV",
            support: "Support IPTV 24/7"
          },
          benefits: {
            whyChoose: "Pourquoi choisir notre service IPTV ?",
            costEffective: {
              title: "Économique",
              description: "Plus abordable que les forfaits câble ou satellite traditionnels.",
              learnMore: "En savoir plus sur la technologie de streaming IPTV",
              link: "Voir les forfaits d'abonnement IPTV"
            },
            streaming: {
              title: "Streaming Haute Qualité",
              description: "Profitez d'une qualité vidéo et audio haute définition.",
              link: "Découvrir les fonctionnalités HD et 4K"
            },
            flexible: {
              title: "Visionnage Flexible",
              description: "Regardez vos contenus préférés n'importe quand, n'importe où avec une connexion internet.",
              link: "Découvrir le streaming multi-appareils"
            },
            global: {
              title: "Portée Mondiale",
              description: "Accédez à une large gamme de chaînes et contenus internationaux.",
              link: "Parcourir la liste des chaînes internationales"
            }
          },
          stats: {
            title: "Pourquoi nous choisir pour votre",
            subtitle: "Abonnement IPTV",
            description: "Découvrez une qualité et une fiabilité inégalées avec notre service IPTV premium, approuvé par des milliers d'utilisateurs dans le monde.",
            customers: "Clients Satisfaits",
            channels: "Chaînes",
            sports: "Chaînes Sport",
            vod: "VOD & Films"
          },
          faq: {
            title: "Des Questions ?",
            subtitle: "Questions Fréquentes",
            description: "Trouvez les réponses aux questions courantes sur notre service IPTV"
          }
        }
      }
    }
  });

export default i18n;