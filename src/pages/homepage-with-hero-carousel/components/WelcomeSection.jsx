import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const WelcomeSection = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const content = {
    en: {
      subtitle: "Welcome to",
      title: "The Ritz-Carlton Experience",
      description: "For over a century, The Ritz-Carlton has been synonymous with luxury, elegance, and impeccable service. Our commitment to creating unforgettable experiences is woven into every aspect of your stay, from our legendary service to our exquisite accommodations.",
      features: [
        {
          icon: "Crown",
          title: "Legendary Service",
          description: "Experience our Gold Standards of service that have defined luxury hospitality for generations."
        },
        {
          icon: "Award",
          title: "Award-Winning Properties",
          description: "Stay at globally recognized hotels that consistently earn the highest accolades in luxury travel."
        },
        {
          icon: "Sparkles",
          title: "Unforgettable Experiences",
          description: "Create lasting memories with our curated collection of exclusive experiences and amenities."
        }
      ],
      cta: "Discover Our Story"
    },
    es: {
      subtitle: "Bienvenido a",
      title: "La Experiencia Ritz-Carlton",
      description: "Durante más de un siglo, The Ritz-Carlton ha sido sinónimo de lujo, elegancia y servicio impecable. Nuestro compromiso de crear experiencias inolvidables está tejido en cada aspecto de su estadía, desde nuestro servicio legendario hasta nuestros alojamientos exquisitos.",
      features: [
        {
          icon: "Crown",
          title: "Servicio Legendario",
          description: "Experimente nuestros Estándares de Oro de servicio que han definido la hospitalidad de lujo por generaciones."
        },
        {
          icon: "Award",
          title: "Propiedades Galardonadas",
          description: "Hospédese en hoteles reconocidos mundialmente que consistentemente obtienen los más altos reconocimientos en viajes de lujo."
        },
        {
          icon: "Sparkles",
          title: "Experiencias Inolvidables",
          description: "Cree recuerdos duraderos con nuestra colección curada de experiencias exclusivas y amenidades."
        }
      ],
      cta: "Descubra Nuestra Historia"
    },
    fr: {
      subtitle: "Bienvenue à",
      title: "L\'Expérience Ritz-Carlton",
      description: "Depuis plus d\'un siècle, The Ritz-Carlton est synonyme de luxe, d\'élégance et de service impeccable. Notre engagement à créer des expériences inoubliables est tissé dans chaque aspect de votre séjour, de notre service légendaire à nos hébergements exquis.",
      features: [
        {
          icon: "Crown",
          title: "Service Légendaire",
          description: "Découvrez nos Standards d\'Or de service qui ont défini l\'hospitalité de luxe pendant des générations."
        },
        {
          icon: "Award",
          title: "Propriétés Primées",
          description: "Séjournez dans des hôtels reconnus mondialement qui obtiennent constamment les plus hautes distinctions en voyage de luxe."
        },
        {
          icon: "Sparkles",
          title: "Expériences Inoubliables",
          description: "Créez des souvenirs durables avec notre collection sélectionnée d\'expériences exclusives et d\'équipements."
        }
      ],
      cta: "Découvrez Notre Histoire"
    }
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="font-body text-accent font-medium text-lg">
                {content[currentLanguage].subtitle}
              </p>
              <h2 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-5xl text-primary leading-tight">
                {content[currentLanguage].title}
              </h2>
              <p className="font-body text-lg text-text-secondary leading-relaxed">
                {content[currentLanguage].description}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {content[currentLanguage].features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-luxury flex items-center justify-center">
                    <Icon name={feature.icon} size={24} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-xl text-primary mb-2">
                      {feature.title}
                    </h3>
                    <p className="font-body text-text-secondary leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button
                text={content[currentLanguage].cta}
                variant="solid"
                className="font-medium"
              />
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-luxury shadow-luxury-pronounced">
              <Image
                src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
                alt="Luxury hotel lobby"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;