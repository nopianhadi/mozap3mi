import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Menu,
  X,
  Globe2,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  Plane,
  Shield,
  Users,
  Award,
  MessageSquare,
  Send,
  Building2,
  Camera,
} from "lucide-react";

import heroBackgroundImage from "@assets/generated_images/Hero_background_workers_success_66ef7f64.png";
import japanImage from "@assets/generated_images/Japan_destination_workplace_f6a51bf0.png";
import hongkongImage from "@assets/generated_images/Hong_Kong_business_district_72d4695c.png";
import taiwanImage from "@assets/generated_images/Taiwan_Taipei_business_center_96d77d9f.png";
import australiaImage from "@assets/generated_images/Australia_Sydney_landmarks_5e6fbaf4.png";
import europeImage from "@assets/generated_images/Europe_business_district_modern_fcf996c3.png";
import kuwaitImage from "@assets/generated_images/Kuwait_City_towers_skyline_7cb4a9d3.png";
import trainingImage from "@assets/generated_images/Training_center_skills_learning_ef76e55a.png";
import departureImage from "@assets/generated_images/Airport_departure_workers_family_7bf7697f.png";
import graduationImage from "@assets/generated_images/Graduation_ceremony_workers_certificates_4d7a6280.png";

const contactFormSchema = z.object({
  name: z.string().min(2, "Nama harus minimal 2 karakter"),
  email: z.string().email("Email tidak valid"),
  phone: z.string().min(10, "Nomor telepon harus minimal 10 digit"),
  message: z.string().min(10, "Pesan harus minimal 10 karakter"),
});

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  const onSubmit = (data: z.infer<typeof contactFormSchema>) => {
    console.log("Form submitted:", data);
    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih, kami akan segera menghubungi Anda.",
    });
    form.reset();
  };

  const services = [
    { country: "Jepang", description: "Peluang kerja teknologi & manufaktur", image: japanImage },
    { country: "Hongkong", description: "Sektor jasa & perhotelan", image: hongkongImage },
    { country: "Taiwan", description: "Industri & perawatan", image: taiwanImage },
    { country: "Australia", description: "Pertanian & layanan profesional", image: australiaImage },
    { country: "Eropa", description: "Berbagai sektor profesional", image: europeImage },
    { country: "Kuwait", description: "Layanan domestik & konstruksi", image: kuwaitImage },
  ];

  const galleryImages = [
    { title: "Pelatihan Profesional", description: "Pelatihan kompetensi dan keterampilan untuk calon pekerja migran", image: trainingImage },
    { title: "Keberangkatan", description: "Pendampingan lengkap hingga keberangkatan ke negara tujuan", image: departureImage },
    { title: "Sertifikasi", description: "Pemberian sertifikat kompetensi kepada lulusan yang siap bekerja", image: graduationImage },
  ];

  const advantages = [
    {
      number: "01",
      icon: CheckCircle2,
      title: "Informasi Tepat & Akurat",
      description: "Informasi peluang kerja di luar negeri yang tepat, akurat dan akuntabel untuk kesuksesan karir Anda.",
    },
    {
      number: "02",
      icon: Award,
      title: "Pelayanan Prima",
      description: "Layanan terbaik dengan pendampingan penuh dari awal proses hingga keberangkatan.",
    },
    {
      number: "03",
      icon: Shield,
      title: "Terjamin & Aman",
      description: "Terdaftar resmi sebagai P3MI dengan legalitas lengkap untuk menjamin keamanan Anda.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Globe2 className="h-8 w-8 text-primary" />
              <div>
                <h1 className="font-bold text-lg leading-tight">PT. Moza Group Indonesia</h1>
                <p className="text-xs text-muted-foreground">P3MI Terdaftar Resmi</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("home")}
                className="text-sm font-medium hover:text-primary transition-colors"
                data-testid="link-home"
              >
                Beranda
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium hover:text-primary transition-colors"
                data-testid="link-about"
              >
                Tentang
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm font-medium hover:text-primary transition-colors"
                data-testid="link-services"
              >
                Layanan
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-sm font-medium hover:text-primary transition-colors"
                data-testid="link-gallery"
              >
                Galeri
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                size="sm"
                data-testid="button-contact-nav"
              >
                Hubungi Kami
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-white">
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-4 py-2 hover:bg-accent rounded-md"
                data-testid="link-home-mobile"
              >
                Beranda
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-4 py-2 hover:bg-accent rounded-md"
                data-testid="link-about-mobile"
              >
                Tentang
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-4 py-2 hover:bg-accent rounded-md"
                data-testid="link-services-mobile"
              >
                Layanan
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="block w-full text-left px-4 py-2 hover:bg-accent rounded-md"
                data-testid="link-gallery-mobile"
              >
                Galeri
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full"
                data-testid="button-contact-mobile"
              >
                Hubungi Kami
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-sm font-medium text-white" data-testid="badge-registered">
              <Award className="h-4 w-4" />
              Terdaftar Resmi P3MI 2025
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg" data-testid="text-company-name">
            PT. Moza Group
            <span className="text-primary"> Indonesia</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed drop-shadow-md" data-testid="text-tagline">
            Dari Moza ke dunia kerja global, profesional berkarya Indonesia mendunia
          </p>

          <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto mb-12 drop-shadow-md" data-testid="text-description">
            Perusahaan Penempatan Pekerja Migran Indonesia (P3MI) terpercaya yang berdomisili di Kota Tangerang, 
            Provinsi Banten. Membantu calon pekerja mencari peluang bekerja di luar negeri.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("about")}
              className="min-w-[200px] bg-primary hover:bg-primary/90 text-white shadow-xl"
              data-testid="button-learn-more"
            >
              <Users className="mr-2 h-5 w-5" />
              Pelajari Lebih Lanjut
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="min-w-[200px] bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              data-testid="button-consultation"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Konsultasi Gratis
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20" data-testid="stat-countries">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2" data-testid="stat-countries-value">6</div>
              <div className="text-sm text-white/80">Negara Tujuan</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20" data-testid="stat-year">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2" data-testid="stat-year-value">2025</div>
              <div className="text-sm text-white/80">Tahun Berdiri</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20" data-testid="stat-trust">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2" data-testid="stat-trust-value">100%</div>
              <div className="text-sm text-white/80">Terpercaya</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20" data-testid="stat-support">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2" data-testid="stat-support-value">24/7</div>
              <div className="text-sm text-white/80">Dukungan</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Tentang Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              PT. Moza Group Indonesia adalah perusahaan penempatan pekerja migran Indonesia (P3MI) 
              yang berkomitmen untuk mencetak tenaga kerja profesional berkualitas tinggi.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Visi */}
            <Card className="hover-elevate" data-testid="card-visi">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Globe2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Visi</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Menjadi lembaga pelatihan kerja unggul yang mencetak tenaga profesional, berkualitas, 
                  mandiri, dan religius untuk bersaing serta berkontribusi di tingkat nasional dan internasional.
                </p>
              </CardContent>
            </Card>

            {/* Misi */}
            <Card className="hover-elevate" data-testid="card-misi">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Misi</h3>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="leading-relaxed">Menyelenggarakan pelatihan berbasis kompetensi sesuai standar nasional dan internasional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="leading-relaxed">Membentuk SDM yang disiplin, jujur, tangguh, dan berdaya saing global</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="leading-relaxed">Mengembangkan kurikulum relevan dengan kebutuhan industri global</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="leading-relaxed">Menanamkan nilai kemandirian dan jiwa wirausaha</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="leading-relaxed">Menjalin kemitraan dengan pemerintah, industri, dan lembaga internasional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="leading-relaxed">Memberikan pembinaan akhlak, spiritual, dan nilai-nilai religius</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Tujuan */}
            <Card className="hover-elevate" data-testid="card-tujuan">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Tujuan</h3>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="leading-relaxed">Menghasilkan tenaga kerja profesional berkompetensi tinggi dan religius</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="leading-relaxed">Menyediakan SDM unggul untuk dalam dan luar negeri</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="leading-relaxed">Mendorong lahirnya tenaga kerja mandiri dan berjiwa wirausaha</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="leading-relaxed">Meningkatkan citra tenaga kerja Indonesia di dunia internasional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="leading-relaxed">Membantu pemerintah mencetak generasi pekerja berkualitas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Negara Tujuan Penempatan
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Kami menyediakan layanan penempatan pekerja migran Indonesia ke berbagai negara dengan peluang karir terbaik
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover-elevate transition-all duration-300 overflow-hidden"
                data-testid={`card-service-${service.country.toLowerCase()}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={`${service.country} destination`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1" data-testid={`text-country-${service.country.toLowerCase()}`}>
                      {service.country}
                    </h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-primary">
                    <Plane className="h-4 w-4" />
                    <span className="font-medium">Tersedia</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Keunggulan Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Mengapa memilih PT. Moza Group Indonesia sebagai mitra perjalanan karir global Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="hover-elevate"
                data-testid={`card-advantage-${index}`}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <span className="text-5xl font-bold text-primary/20">{advantage.number}</span>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <advantage.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{advantage.title}</h3>
                  <p className="text-foreground/80 leading-relaxed">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Galeri Kegiatan
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Dokumentasi kegiatan pelatihan, pendampingan, dan keberangkatan pekerja migran Indonesia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {galleryImages.map((item, index) => (
              <Card
                key={index}
                className="hover-elevate overflow-hidden"
                data-testid={`card-gallery-${index}`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Camera className="h-5 w-5 text-white" />
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-sm text-white/90">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Hubungi Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Mari wujudkan impian karir global Anda bersama kami. Konsultasi gratis dan terpercaya.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card data-testid="card-contact-form">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Kirim Pesan</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nama Lengkap</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Masukkan nama lengkap Anda"
                              data-testid="input-name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="nama@email.com"
                              data-testid="input-email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nomor Telepon</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="08xx xxxx xxxx"
                              data-testid="input-phone"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pesan</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tulis pesan Anda di sini..."
                              rows={5}
                              data-testid="input-message"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                      disabled={form.formState.isSubmitting}
                      data-testid="button-send"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      {form.formState.isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card data-testid="card-contact-info">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Informasi Kontak</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Alamat</h4>
                        <p className="text-muted-foreground">
                          JL Beringin Raya Blok 42 No.75<br />
                          Kota Tangerang, Banten
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Telepon / WhatsApp</h4>
                        <a
                          href="tel:08980422566"
                          className="text-primary hover:underline"
                          data-testid="link-phone"
                        >
                          0898-0422-566
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Email</h4>
                        <a
                          href="mailto:mozagroupindonesia@gmail.com"
                          className="text-primary hover:underline break-all"
                          data-testid="link-email"
                        >
                          mozagroupindonesia@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Jam Operasional</h4>
                        <p className="text-muted-foreground">
                          Senin - Sabtu: 08:00 - 16:00 WIB<br />
                          Minggu: Tutup
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground" data-testid="card-certification">
                <CardContent className="p-8 text-center">
                  <Shield className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Terdaftar & Berizin Resmi</h3>
                  <p className="text-primary-foreground/90">
                    P3MI (Perusahaan Penempatan Pekerja Migran Indonesia) dengan legalitas lengkap
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Globe2 className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-bold text-lg">PT. Moza Group Indonesia</h3>
                  <p className="text-xs text-background/70">P3MI Terdaftar Resmi</p>
                </div>
              </div>
              <p className="text-sm text-background/80 mb-4">
                Dari Moza ke dunia kerja global, profesional berkarya Indonesia mendunia
              </p>
              <p className="text-xs text-background/60">Didirikan tahun 2025</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Navigasi Cepat</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>
                  <button onClick={() => scrollToSection("home")} className="hover:text-primary transition-colors">
                    Beranda
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("about")} className="hover:text-primary transition-colors">
                    Tentang Kami
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("services")} className="hover:text-primary transition-colors">
                    Layanan
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("gallery")} className="hover:text-primary transition-colors">
                    Galeri
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("contact")} className="hover:text-primary transition-colors">
                    Kontak
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kontak Kami</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>JL Beringin Raya Blok 42 No.75, Tangerang, Banten</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <a href="tel:08980422566" className="hover:text-primary transition-colors">0898-0422-566</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <a href="mailto:mozagroupindonesia@gmail.com" className="hover:text-primary transition-colors break-all">
                    mozagroupindonesia@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center">
            <p className="text-sm text-background/60">
              © 2025 PT. Moza Group Indonesia. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
