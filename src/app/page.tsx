
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas" subheadline="Digitaliza tu negocio con una web lista en un día y soporte continuo." cta1="Hazlo Fácil" />
<How step1Title="Conéctate con nosotros" step1Desc="Cuéntanos sobre tu negocio y necesidades." step2Title="Creamos tu web" step2Desc="Desarrollamos tu sitio de ventas en 24 horas." step3Title="Despega tu negocio" step3Desc="Empieza a vender online con soporte 24/7." />
<Aboutus headline="WebGo: Potencia tus ventas online" subheadline="WebGo digitaliza tu negocio sin esfuerzo, atrayendo clientes más allá de recomendaciones." beneficiotitulo1="Gestión Total" beneficio1="Nos encargamos de todo, ahorra tiempo." beneficiotitulo2="Ventas Crecientes" beneficio2="Estrategias efectivas que multiplican clientes." />
<Services heading="Impulsa tu Negocio con Ventas Online" description="asda revoluciona tu presencia digital en 24 horas." services={[{"name":"Desarrollo Rápido","icon":"rocket","description":"Web lista en menos de 24 horas."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia continua para tu web."},{"name":"SEO Avanzado","icon":"search","description":"Aparece en los primeros resultados."},{"name":"Gestión de Contenidos","icon":"edit","description":"Contenido atractivo y relevante."},{"name":"Marketing Digital","icon":"bullhorn","description":"Estrategias para aumentar tus ventas."},{"name":"Integración de Pagos","icon":"credit-card","description":"Facilita las transacciones online."}]} />
<BeforeAndAfter subheadline="Transformamos ideas en soluciones web que marcan la diferencia." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar mi negocio si solo vendo por recomendación?","respuesta":"WebGo te ayuda a llevar tu negocio al mundo online, creando una tienda virtual atractiva y fácil de usar. Así, tus clientes podrán encontrarte más allá de las recomendaciones, lo que aumentará tus ventas."},{"pregunta":"¿Qué beneficios ofrece el servicio de WebGo para mi pequeño negocio?","respuesta":"Con WebGo, obtienes una solución completa para digitalizar tu negocio. Desde la creación de tu página web hasta estrategias de marketing digital, todo está diseñado para que vendas más sin complicaciones."},{"pregunta":"No tengo tiempo para gestionar un sitio web. ¿Cómo puede WebGo solucionar esto?","respuesta":"¡No te preocupes! WebGo se encarga de todo, desde la creación hasta el mantenimiento de tu sitio web. Así, puedes enfocarte en lo que mejor sabes hacer: dirigir tu negocio."},{"pregunta":"¿Es caro contratar a WebGo para digitalizar mi negocio?","respuesta":"WebGo ofrece precios competitivos y justos. Por ejemplo, el precio del servicio base es de 123. Invertir en digitalizar tu negocio puede aumentar tus ventas y hacer crecer tu empresa."},{"pregunta":"¿Qué pasa si no sé cómo generar ventas online?","respuesta":"WebGo te brinda las herramientas y estrategias necesarias para generar ventas online. Con nuestra experiencia, aprenderás a atraer clientes y convertir visitas en ventas reales."}]} />
<BookAppointment 
                      heading="Digitaliza tus Ventas Hoy" 
                      description="Transforma recomendaciones en ventas online con WebGo. Descubre cómo vender sin gestionar un sitio web. Precio: 123 - adsa."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
