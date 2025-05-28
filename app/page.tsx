import { ChevronRight, Phone, Mail, MapPin, Clock, Scale, Briefcase, Shield, Award, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Scale className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Abogados Asociados</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#inicio" className="text-sm font-medium hover:underline underline-offset-4">
              Inicio
            </Link>
            <Link href="#servicios" className="text-sm font-medium hover:underline underline-offset-4">
              Servicios
            </Link>
            <Link href="#nosotros" className="text-sm font-medium hover:underline underline-offset-4">
              Nosotros
            </Link>
            <Link href="#testimonios" className="text-sm font-medium hover:underline underline-offset-4">
              Testimonios
            </Link>
            <Link href="#contacto" className="text-sm font-medium hover:underline underline-offset-4">
              Contacto
            </Link>
          </nav>
          <Button className="hidden md:flex">
            <Phone className="mr-2 h-4 w-4" /> Consulta Gratuita
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Menú</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section
          id="inicio"
          className="w-full py-12 md:py-24 lg:py-32 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center relative"
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="container relative z-10 flex flex-col items-center gap-4 text-center text-white">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Especialistas en Accidentes Laborales
            </h1>
            <p className="max-w-[700px] text-lg sm:text-xl">
              Defendemos sus derechos con experiencia y compromiso. Más de 20 años protegiendo a trabajadores en toda
              Argentina.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Consulta Gratuita
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
                Nuestros Servicios
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-8 bg-muted">
          <div className="container grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center p-4">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium">Experiencia Comprobada</h3>
              <p className="text-muted-foreground">Más de 20 años de trayectoria en casos laborales</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium">Atención Personalizada</h3>
              <p className="text-muted-foreground">Seguimiento detallado de cada caso</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium">Resultados Exitosos</h3>
              <p className="text-muted-foreground">Alto porcentaje de casos resueltos favorablemente</p>
            </div>
          </div>
        </section>

        <section id="servicios" className="w-full py-12 md:py-24">
          <div className="container flex flex-col items-center gap-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Nuestros Servicios Legales
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Ofrecemos asesoramiento legal integral en todas las áreas relacionadas con accidentes laborales.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-4 mb-4">
                    <Briefcase className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Accidentes de Trabajo</h3>
                  <p className="text-muted-foreground">
                    Representación legal completa para trabajadores que han sufrido accidentes en su lugar de trabajo.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-4 mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Enfermedades Profesionales</h3>
                  <p className="text-muted-foreground">
                    Asesoramiento en casos de enfermedades desarrolladas como consecuencia de la actividad laboral.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-4 mb-4">
                    <Scale className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Indemnizaciones</h3>
                  <p className="text-muted-foreground">
                    Cálculo y reclamo de indemnizaciones justas por daños físicos, psicológicos y morales.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-4 mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Asesoría a Empresas</h3>
                  <p className="text-muted-foreground">
                    Consultoría legal preventiva para empresas en materia de seguridad laboral y normativa vigente.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-4 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8 text-primary"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Riesgos del Trabajo</h3>
                  <p className="text-muted-foreground">
                    Gestión de reclamos ante las ART y defensa de los derechos del trabajador.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-4 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8 text-primary"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Incapacidades Laborales</h3>
                  <p className="text-muted-foreground">
                    Determinación del grado de incapacidad y obtención de compensaciones adecuadas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="nosotros" className="w-full py-12 md:py-24 bg-muted">
          <div className="container">
            <div className="flex flex-col items-center gap-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestro Equipo</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Contamos con un equipo de profesionales especializados en derecho laboral y accidentes de trabajo.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center">
                <div className="rounded-full overflow-hidden mb-4 w-40 h-40">
                  <Image
                    src="/images/agustina-raffo.jpeg"
                    alt="Dra. Agustina Raffo"
                    width={160}
                    height={160}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Dra. Agustina Raffo</h3>
                <p className="text-primary font-medium">Socia Fundadora</p>
                <p className="text-muted-foreground text-center mt-2">
                  Especialista en derecho laboral con más de 15 años de experiencia en litigios por accidentes de
                  trabajo.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="rounded-full overflow-hidden mb-4 w-40 h-40">
                  <Image
                    src="/images/eugenia-lupi-serres.jpeg"
                    alt="Dra. Eugenia Lupi Serres"
                    width={160}
                    height={160}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Dra. Eugenia Lupi Serres</h3>
                <p className="text-primary font-medium">Socia Fundadora</p>
                <p className="text-muted-foreground text-center mt-2">
                  Especializada en enfermedades profesionales y riesgos del trabajo. Docente universitaria.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonios" className="w-full py-12 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center gap-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Testimonios</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Lo que dicen nuestros clientes sobre nuestros servicios legales.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-muted/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full overflow-hidden w-12 h-12">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Cliente"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">Roberto Gómez</h4>
                      <p className="text-sm text-muted-foreground">Operario Industrial</p>
                    </div>
                  </div>
                  <p className="italic">
                    "Después de mi accidente en la fábrica, pensé que no tendría opciones. El equipo de Abogados
                    Asociados me ayudó a obtener la compensación que merecía. Excelentes profesionales."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-muted/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full overflow-hidden w-12 h-12">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Cliente"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">Laura Martínez</h4>
                      <p className="text-sm text-muted-foreground">Empleada Administrativa</p>
                    </div>
                  </div>
                  <p className="italic">
                    "Mi caso de enfermedad profesional era complejo, pero gracias a la Dra. Fernández pudimos demostrar
                    la relación con mi trabajo. Siempre me mantuvieron informada durante todo el proceso."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-muted/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full overflow-hidden w-12 h-12">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Cliente"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">Miguel Sánchez</h4>
                      <p className="text-sm text-muted-foreground">Trabajador de la Construcción</p>
                    </div>
                  </div>
                  <p className="italic">
                    "Sufrí una caída grave en una obra y la ART quería minimizar mi incapacidad. Gracias al Dr. López
                    conseguimos que se reconociera el verdadero alcance de mis lesiones."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contacto" className="w-full py-12 md:py-24 bg-primary/5">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Contáctenos</h2>
                <p className="text-muted-foreground mb-6">
                  Complete el formulario y uno de nuestros abogados se pondrá en contacto con usted para una consulta
                  gratuita.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+54 9 11 4493-2492</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>info@raffolupi.com.ar</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Av. Leandro N. Alem 1002, Piso 5, CABA, Argentina</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Lunes a Viernes: 9:00 - 18:00</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="nombre" className="text-sm font-medium">
                        Nombre
                      </label>
                      <input id="nombre" className="w-full p-2 border rounded-md" placeholder="Su nombre" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="apellido" className="text-sm font-medium">
                        Apellido
                      </label>
                      <input id="apellido" className="w-full p-2 border rounded-md" placeholder="Su apellido" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input id="email" type="email" className="w-full p-2 border rounded-md" placeholder="Su email" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="telefono" className="text-sm font-medium">
                      Teléfono
                    </label>
                    <input id="telefono" className="w-full p-2 border rounded-md" placeholder="Su teléfono" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="asunto" className="text-sm font-medium">
                      Tipo de Caso
                    </label>
                    <select id="asunto" className="w-full p-2 border rounded-md">
                      <option value="">Seleccione una opción</option>
                      <option value="accidente">Accidente Laboral</option>
                      <option value="enfermedad">Enfermedad Profesional</option>
                      <option value="art">Problema con ART</option>
                      <option value="indemnizacion">Indemnización</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="mensaje" className="text-sm font-medium">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      className="w-full p-2 border rounded-md min-h-[100px]"
                      placeholder="Describa brevemente su caso"
                    ></textarea>
                  </div>
                  <Button className="w-full">Enviar Consulta</Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Al enviar este formulario, acepta nuestra política de privacidad y protección de datos.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 bg-primary text-primary-foreground">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold">¿Necesita ayuda legal inmediata?</h2>
                <p>Primera consulta sin cargo y sin compromiso</p>
              </div>
              <Button size="lg" variant="secondary">
                Llámenos Ahora: +54 9 11 4493-2492
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted/40">
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Scale className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Abogados Asociados</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Especialistas en accidentes laborales y enfermedades profesionales en toda Argentina.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#inicio" className="text-sm text-muted-foreground hover:text-foreground">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="#servicios" className="text-sm text-muted-foreground hover:text-foreground">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="#nosotros" className="text-sm text-muted-foreground hover:text-foreground">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#testimonios" className="text-sm text-muted-foreground hover:text-foreground">
                    Testimonios
                  </Link>
                </li>
                <li>
                  <Link href="#contacto" className="text-sm text-muted-foreground hover:text-foreground">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Servicios</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Accidentes de Trabajo
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Enfermedades Profesionales
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Indemnizaciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Riesgos del Trabajo
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Asesoría a Empresas
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Contacto</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Av. Leandro N. Alem 1002, Piso 5, CABA</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+54 9 11 4493-2492</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>info@raffolupi.com.ar</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Abogados Asociados. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
