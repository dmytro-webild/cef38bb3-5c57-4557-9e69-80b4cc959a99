"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Phone } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="small"
        sizing="largeSmallSizeMediumTitles"
        background="blurBottom"
        cardStyle="outline"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Accueil",
          id: "hero",

        },
        {
          name: "Menu",
          id: "menu",

        },
        {
          name: "À Propos",
          id: "about",

        },
        {
          name: "Contact",
          id: "contact",

        },
      ]}
      button={{
        text: "Appeler maintenant",
        href: "tel:+33123456789",
      }}
      brandName="AsiaGrill 168"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "radial-gradient",
      }}
      title="Buffet asiatique à volonté à Herblay – Frais, varié, convivial"
      description="Sur place & à emporter – Service rapide et accueil chaleureux"
      buttons={[
        {
          text: "Appeler maintenant",
          href: "tel:+33123456789",
        },
        {
          text: "Réserver une table",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/woman-eating-food-restaurant_23-2150520105.jpg"
      imageAlt="Intérieur du restaurant AsiaGrill 168 avec buffet asiatique"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Accueillant",
        "Varié",
        "Bon rapport qualité-prix",
        "Idéal en famille",
      ]}
      title="Nos clients nous adorent !"
      description="Avec une note de ⭐ 4,1 / 5 basée sur 1300+ avis, AsiaGrill 168 est votre adresse de choix à Herblay-sur-Seine. Nos clients saluent notre ambiance accueillante, la variété de notre buffet et notre excellent rapport qualité-prix, idéal pour les familles."
      speed={30}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      carouselMode="buttons"
      features={[
        {
          id: "1",
          title: "Cuisine Fraîche et Variée",
          description: "Profitez d'un large éventail de saveurs asiatiques, des sushis délicats aux woks personnalisables, toujours préparés avec des ingrédients de première qualité.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-person-cooking_23-2150980294.jpg",
          imageAlt: "Plat de sushis et ingrédients frais",
        },
        {
          id: "2",
          title: "Buffet à Volonté Généreux",
          description: "Dégustez un festin sans limite avec notre buffet à volonté, offrant un excellent rapport qualité-prix pour satisfaire toutes vos envies.",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-delicious-food-arrangement_23-2149617130.jpg",
          imageAlt: "Buffet asiatique abondant et varié",
        },
        {
          id: "3",
          title: "Service Attentif et Rapide",
          description: "Notre équipe dévouée vous assure un accueil chaleureux et un service efficace, pour que votre repas soit une expérience agréable et sans attente.",
          imageSrc: "http://img.b2bpic.net/free-photo/couple-ordering-food-restaurant_23-2149269231.jpg",
          imageAlt: "Serveur souriant et attentif",
        },
        {
          id: "4",
          title: "Cadre Propre et Agréable",
          description: "Détendez-vous dans un environnement moderne, propre et accueillant, parfait pour les repas en famille, entre amis ou entre collègues.",
          imageSrc: "http://img.b2bpic.net/free-vector/organic-flat-hotel-banner-template_23-2148929147.jpg",
          imageAlt: "Intérieur propre et moderne du restaurant",
        },
      ]}
      title="Pourquoi Choisir AsiaGrill 168 ?"
      description="Une expérience culinaire unique qui vous garantit fraîcheur, variété et convivialité à chaque visite."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      carouselMode="buttons"
      products={[
        {
          id: "sushi",
          name: "Plateau de Sushi Varié",
          price: "À volonté au buffet",
          imageSrc: "http://img.b2bpic.net/free-photo/chicken-roll-with-pate-sauce-side-view_141793-2341.jpg",
          imageAlt: "Assortiment de sushis frais et colorés",
        },
        {
          id: "wok",
          name: "Wok Personnalisable",
          price: "À volonté au buffet",
          imageSrc: "http://img.b2bpic.net/free-psd/stir-fried-seafood-noodles-with-shrimp-clams_84443-80255.jpg",
          imageAlt: "Plat de wok chaud avec légumes et viande",
        },
        {
          id: "shrimp",
          name: "Crevettes Sautées",
          price: "À volonté au buffet",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-seafood-table_23-2150857706.jpg",
          imageAlt: "Crevettes sautées aux légumes asiatiques",
        },
        {
          id: "noodles",
          name: "Nouilles Sautées",
          price: "À volonté au buffet",
          imageSrc: "http://img.b2bpic.net/free-photo/bowl-fish-ball-vegetable-soup-served-with-beans-sprout-grated-carrot-wooden-table_23-2148093196.jpg",
          imageAlt: "Bol de nouilles asiatiques avec viande et légumes",
        },
      ]}
      title="Découvrez Nos Spécialités"
      description="Un voyage culinaire à travers l'Asie, avec des plats préparés avec passion et expertise pour ravir vos papilles."
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Ambiance & Expérience AsiaGrill 168"
      description={[
        "Plongez dans une atmosphère chaleureuse et conviviale, parfaite pour toutes vos occasions. Que ce soit pour un repas en famille, entre amis ou un déjeuner rapide, notre restaurant est conçu pour vous offrir un moment agréable et mémorable.",
        "Profitez de notre salle spacieuse et lumineuse, décorée avec goût pour refléter l'élégance asiatique moderne. Nous mettons un point d'honneur à maintenir un cadre impeccable et accueillant pour que chaque visite soit un plaisir, idéal pour les groupes et les familles.",
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactFaq
      animationType="slide-up"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "À quelle heure ouvrez-vous ?",
          content: "Nous sommes ouverts tous les jours de 12h00 à 14h30 pour le déjeuner et de 19h00 à 22h30 pour le dîner. Notez que nous ouvrons à 19h00 pour le service du soir.",
        },
        {
          id: "q2",
          title: "Proposez-vous la livraison à domicile ?",
          content: "Nous proposons le service sur place et à emporter, mais nous ne faisons pas de livraison pour le moment.",
        },
        {
          id: "q3",
          title: "Faut-il réserver une table ?",
          content: "Pour les groupes ou les vendredis et samedis soirs, nous vous recommandons fortement de réserver pour garantir votre table.",
        },
        {
          id: "q4",
          title: "Où êtes-vous situé ?",
          content: "Vous nous trouverez à Herblay-sur-Seine. L'adresse exacte est [Insérer l'adresse complète ici, ex: 168 Rue de la Paix, 95220 Herblay-sur-Seine]. Cliquez sur 'Voir l'itinéraire' pour nous trouver facilement.",
        },
      ]}
      ctaTitle="Prêt à Déguster ?"
      ctaDescription="Réservez votre table ou appelez-nous dès maintenant pour une expérience culinaire inoubliable à AsiaGrill 168."
      ctaButton={{
        text: "Appeler maintenant",
        href: "tel:+33123456789",
      }}
      ctaIcon={Phone}
      accordionAnimationType="smooth"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="AsiaGrill 168"
      leftLink={{
        text: "Mentions Légales",
        href: "#",
      }}
      rightLink={{
        text: "Politique de Confidentialité",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
