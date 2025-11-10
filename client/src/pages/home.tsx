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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
  Briefcase,
  DollarSign,
  FileText,
  GraduationCap,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";

import logoImage from "@assets/573315281_17845360602599447_6323022409172942324_n.jpg";
import heroSideImage from "@assets/generated_images/Training_center_skills_learning_ef76e55a.png";
import japanImage from "@assets/generated_images/Japan_destination_workplace_f6a51bf0.png";
import hongkongImage from "@assets/generated_images/Hong_Kong_business_district_72d4695c.png";
import taiwanImage from "@assets/generated_images/Taiwan_Taipei_business_center_96d77d9f.png";
import australiaImage from "@assets/generated_images/Australia_Sydney_landmarks_5e6fbaf4.png";
import europeImage from "@assets/generated_images/Europe_business_district_modern_fcf996c3.png";
import kuwaitImage from "@assets/generated_images/Kuwait_City_towers_skyline_7cb4a9d3.png";
import trainingImage from "@assets/generated_images/Training_center_skills_learning_ef76e55a.png";
import departureImage from "@assets/generated_images/Airport_departure_workers_family_7bf7697f.png";
import graduationImage from "@assets/generated_images/Graduation_ceremony_workers_certificates_4d7a6280.png";
import officeImage1 from "@assets/generated_images/IMG-20251110-WA0001_enhanced.jpg";
import officeImage2 from "@assets/generated_images/IMG-20251110-WA0002_enhanced.jpg";
import officeImage3 from "@assets/generated_images/IMG-20251110-WA0003_enhanced.jpg";
import officeImage4 from "@assets/generated_images/IMG-20251110-WA0004_enhanced.jpg";
import officeImage5 from "@assets/generated_images/IMG-20251110-WA0005_enhanced.jpg";

const contactFormSchema = z.object({
  name: z.string().min(2, "Nama harus minimal 2 karakter"),
  email: z.string().email("Email tidak valid"),
  phone: z.string().min(10, "Nomor telepon harus minimal 10 digit"),
  message: z.string().min(10, "Pesan harus minimal 10 karakter"),
});

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
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
    { 
      country: "Jepang", 
      description: "Peluang kerja teknologi & manufaktur", 
      image: japanImage,
      details: {
        sectors: ["Teknologi & IT", "Manufaktur & Industri", "Perawatan Lansia (Caregiver)", "Perhotelan & Restoran"],
        salary: "Rp 15.000.000 - Rp 30.000.000 per bulan",
        requirements: ["Usia 20-35 tahun", "Pendidikan minimal SMA/SMK", "Sehat jasmani dan rohani", "Lulus pelatihan bahasa Jepang"],
        benefits: ["Asuransi kesehatan", "Tunjangan transportasi", "Bonus tahunan", "Peluang perpanjangan kontrak"],
      }
    },
    { 
      country: "Hongkong", 
      description: "Sektor jasa & perhotelan", 
      image: hongkongImage,
      details: {
        sectors: ["Asisten Rumah Tangga", "Perhotelan", "Retail & Jasa", "Perawatan Anak & Lansia"],
        salary: "Rp 8.000.000 - Rp 12.000.000 per bulan",
        requirements: ["Usia 21-40 tahun", "Pendidikan minimal SMP", "Pengalaman kerja diutamakan", "Lulus medical check-up"],
        benefits: ["Akomodasi gratis", "Makanan disediakan", "Hari libur mingguan", "Tiket pulang pergi"],
      }
    },
    { 
      country: "Taiwan", 
      description: "Industri & perawatan", 
      image: taiwanImage,
      details: {
        sectors: ["Manufaktur & Pabrik", "Perawatan Lansia", "Konstruksi", "Perikanan"],
        salary: "Rp 12.000.000 - Rp 18.000.000 per bulan",
        requirements: ["Usia 20-38 tahun", "Pendidikan minimal SMA", "Lulus tes kesehatan", "Pelatihan bahasa Mandarin"],
        benefits: ["Overtime pay", "Asuransi lengkap", "Cuti tahunan", "Bonus kinerja"],
      }
    },
    { 
      country: "Australia", 
      description: "Pertanian & layanan profesional", 
      image: australiaImage,
      details: {
        sectors: ["Pertanian & Perkebunan", "Peternakan", "Perhotelan", "Layanan Profesional"],
        salary: "Rp 30.000.000 - Rp 50.000.000 per bulan",
        requirements: ["Usia 21-45 tahun", "Pendidikan minimal SMA", "Kemampuan bahasa Inggris", "Pengalaman kerja relevan"],
        benefits: ["Gaji tinggi", "Lingkungan kerja profesional", "Peluang PR", "Fasilitas lengkap"],
      }
    },
    { 
      country: "Eropa", 
      description: "Berbagai sektor profesional", 
      image: europeImage,
      details: {
        sectors: ["Perhotelan & Pariwisata", "Perawatan Kesehatan", "Teknologi", "Pendidikan"],
        salary: "Rp 25.000.000 - Rp 50.000.000 per bulan",
        requirements: ["Usia 22-40 tahun", "Pendidikan minimal D3", "Kemampuan bahasa Inggris/lokal", "Sertifikasi profesi"],
        benefits: ["Standar kerja Eropa", "Jaminan sosial lengkap", "Cuti panjang", "Peluang karir internasional"],
      }
    },
    { 
      country: "Kuwait", 
      description: "Layanan domestik & konstruksi", 
      image: kuwaitImage,
      details: {
        sectors: ["Asisten Rumah Tangga", "Konstruksi", "Layanan Kesehatan", "Perhotelan"],
        salary: "Rp 5.000.000 - Rp 10.000.000 per bulan",
        requirements: ["Usia 21-45 tahun", "Pendidikan minimal SMP", "Pengalaman kerja diutamakan", "Lulus medical check-up"],
        benefits: ["Bebas pajak", "Akomodasi & makanan", "Tiket pulang pergi", "Bonus akhir kontrak"],
      }
    },
  ];

  const galleryImages = [
    { title: "Pelatihan Profesional", description: "Pelatihan kompetensi dan keterampilan untuk calon pekerja migran", image: trainingImage },
    { title: "Keberangkatan", description: "Pendampingan lengkap hingga keberangkatan ke negara tujuan", image: departureImage },
    { title: "Sertifikasi", description: "Pemberian sertifikat kompetensi kepada lulusan yang siap bekerja", image: graduationImage },
  ];

  const officeGalleryImages = [
    { title: "Kantor PT Moza Group Indonesia", description: "Tampak depan kantor kami di Tangerang, Banten", image: officeImage1 },
    { title: "Ruang Kantor", description: "Suasana ruang kerja yang profesional dan nyaman", image: officeImage2 },
    { title: "Area Pelayanan", description: "Area pelayanan dan konsultasi untuk calon pekerja migran", image: officeImage3 },
    { title: "Fasilitas Kantor", description: "Fasilitas lengkap untuk mendukung pelayanan terbaik", image: officeImage4 },
    { title: "Lingkungan Kantor", description: "Lingkungan kantor yang strategis dan mudah diakses", image: officeImage5 },
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
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 md:h-16">
            <div className="flex items-center gap-2 md:gap-3">
              <img 
                src={logoImage} 
                alt="PT. Moza Group Indonesia Logo" 
                className="h-10 w-10 md:h-12 md:w-12 object-contain"
              />
              <div>
                <h1 className="font-bold text-sm md:text-base lg:text-lg leading-tight">PT. Moza Group Indonesia</h1>
                <p className="text-[10px] md:text-xs text-muted-foreground">P3MI Terdaftar Resmi</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6">
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
              className="lg:hidden p-2"
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5 md:h-6 md:w-6" /> : <Menu className="h-5 w-5 md:h-6 md:w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-white shadow-lg">
            <div className="px-3 sm:px-4 py-3 md:py-4 space-y-2 md:space-y-3">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-3 md:px-4 py-2 md:py-2.5 hover:bg-accent rounded-md text-sm md:text-base font-medium transition-colors"
                data-testid="link-home-mobile"
              >
                Beranda
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 md:px-4 py-2 md:py-2.5 hover:bg-accent rounded-md text-sm md:text-base font-medium transition-colors"
                data-testid="link-about-mobile"
              >
                Tentang
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-3 md:px-4 py-2 md:py-2.5 hover:bg-accent rounded-md text-sm md:text-base font-medium transition-colors"
                data-testid="link-services-mobile"
              >
                Layanan
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="block w-full text-left px-3 md:px-4 py-2 md:py-2.5 hover:bg-accent rounded-md text-sm md:text-base font-medium transition-colors"
                data-testid="link-gallery-mobile"
              >
                Galeri
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full mt-2"
                data-testid="button-contact-mobile"
              >
                Hubungi Kami
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 border border-primary/20 rounded-full text-xs md:text-sm font-medium text-primary" data-testid="badge-registered">
                  <Award className="h-3 w-3 md:h-4 md:w-4" />
                  Terdaftar Resmi P3MI 2025
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight" data-testid="text-company-name">
                PT. Moza Group
                <span className="text-primary"> Indonesia</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed" data-testid="text-tagline">
                Dari Moza ke dunia kerja global, profesional berkarya Indonesia mendunia
              </p>

              <div className="space-y-3 md:space-y-4">
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground/80" data-testid="text-description">
                  <span className="font-semibold text-foreground">PT. Moza Group Indonesia</span> adalah Perusahaan Penempatan Pekerja Migran Indonesia (P3MI) 
                  terpercaya yang berdomisili di Kota Tangerang, Provinsi Banten.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground/80">
                  Kami didirikan untuk membantu calon pekerja Indonesia mencari peluang bekerja di luar negeri dengan 
                  memberikan pelatihan berbasis kompetensi, pendampingan penuh, dan jaminan keamanan hingga penempatan kerja.
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  <span className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 py-1 md:px-3 md:py-1 bg-green-50 border border-green-200 rounded-full text-xs md:text-sm text-green-700">
                    <CheckCircle2 className="h-3 w-3 md:h-4 md:w-4" />
                    Terdaftar Resmi
                  </span>
                  <span className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 py-1 md:px-3 md:py-1 bg-blue-50 border border-blue-200 rounded-full text-xs md:text-sm text-blue-700">
                    <Shield className="h-3 w-3 md:h-4 md:w-4" />
                    Terpercaya & Aman
                  </span>
                  <span className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 py-1 md:px-3 md:py-1 bg-purple-50 border border-purple-200 rounded-full text-xs md:text-sm text-purple-700">
                    <Award className="h-3 w-3 md:h-4 md:w-4" />
                    Bersertifikat
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("about")}
                  className="w-full sm:min-w-[180px] md:min-w-[200px]"
                  data-testid="button-learn-more"
                >
                  <Users className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Pelajari Lebih Lanjut
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="w-full sm:min-w-[180px] md:min-w-[200px]"
                  data-testid="button-consultation"
                >
                  <MessageSquare className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Konsultasi Gratis
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                <div className="text-center bg-white rounded-lg p-3 md:p-4 shadow-sm border border-border" data-testid="stat-countries">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1" data-testid="stat-countries-value">6</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground">Negara Tujuan</div>
                </div>
                <div className="text-center bg-white rounded-lg p-3 md:p-4 shadow-sm border border-border" data-testid="stat-year">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1" data-testid="stat-year-value">2025</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground">Tahun Berdiri</div>
                </div>
                <div className="text-center bg-white rounded-lg p-3 md:p-4 shadow-sm border border-border" data-testid="stat-trust">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1" data-testid="stat-trust-value">100%</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground">Terpercaya</div>
                </div>
                <div className="text-center bg-white rounded-lg p-3 md:p-4 shadow-sm border border-border" data-testid="stat-support">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1" data-testid="stat-support-value">24/7</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground">Dukungan</div>
                </div>
              </div>
            </div>

            {/* Right Image - Responsive */}
            <div className="relative hidden md:block lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square">
                <img 
                  src={heroSideImage} 
                  alt="Professional Indonesian workers"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-48 h-48 md:w-72 md:h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-48 h-48 md:w-72 md:h-72 bg-blue-500/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-16 lg:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
              Tentang Kami
            </h2>
            <div className="max-w-4xl mx-auto space-y-3 md:space-y-4">
              <p className="text-base md:text-lg text-muted-foreground px-2">
                <span className="font-semibold text-foreground">PT. Moza Group Indonesia</span> adalah Perusahaan Penempatan Pekerja Migran Indonesia (P3MI) 
                yang berdomisili di Kota Tangerang, Provinsi Banten.
              </p>
              <p className="text-sm md:text-base text-muted-foreground px-2">
                Didirikan pada tahun 2025, kami berkomitmen untuk mencetak tenaga kerja profesional berkualitas tinggi yang siap bersaing 
                di tingkat internasional. Kami membantu calon pekerja Indonesia mencari peluang bekerja di luar negeri dengan memberikan 
                pelatihan berbasis kompetensi sesuai standar nasional dan internasional, serta pendampingan penuh dari proses awal hingga 
                keberangkatan ke negara tujuan.
              </p>
              <p className="text-sm md:text-base text-muted-foreground px-2">
                Sebagai lembaga pelatihan kerja yang mengintegrasikan nilai religius dan etika kerja, kami tidak hanya fokus pada 
                kompetensi teknis, tetapi juga membentuk karakter yang disiplin, jujur, tangguh, dan berintegritas tinggi.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
            {/* Visi */}
            <Card className="hover-elevate" data-testid="card-visi">
              <CardContent className="p-5 md:p-6 lg:p-8">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                  <Globe2 className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">Visi</h3>
                <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                  Menjadi lembaga pelatihan kerja unggul yang mencetak tenaga profesional, berkualitas, 
                  mandiri, dan religius untuk bersaing serta berkontribusi di tingkat nasional dan internasional.
                </p>
              </CardContent>
            </Card>

            {/* Misi */}
            <Card className="hover-elevate" data-testid="card-misi">
              <CardContent className="p-5 md:p-6 lg:p-8">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                  <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">Misi</h3>
                <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="leading-relaxed">Menyelenggarakan pelatihan berbasis kompetensi sesuai standar nasional dan internasional dengan mengintegrasikan nilai religius dan etika kerja.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="leading-relaxed">Membentuk sumber daya manusia yang disiplin, jujur, tangguh, serta berdaya saing global.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="leading-relaxed">Mengembangkan kurikulum yang relevan dengan kebutuhan dunia usaha, dunia industri, serta perkembangan teknologi global.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="leading-relaxed">Menanamkan nilai kemandirian dan jiwa wirausaha agar lulusan tidak hanya siap bekerja tetapi juga mampu menciptakan lapangan kerja.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="leading-relaxed">Menjalin kemitraan dengan pemerintah, industri, dan lembaga internasional guna membuka akses kerja dan peluang pengembangan karier.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="leading-relaxed">Memberikan pembinaan akhlak, spiritual, dan nilai-nilai religius agar lulusan berintegritas serta membawa manfaat bagi bangsa dan umat.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Tujuan */}
            <Card className="hover-elevate sm:col-span-2 lg:col-span-1" data-testid="card-tujuan">
              <CardContent className="p-5 md:p-6 lg:p-8">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                  <Award className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">Tujuan</h3>
                <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="leading-relaxed">Menghasilkan tenaga kerja profesional yang berkompetensi tinggi, berkarakter religius, dan siap bersaing di dunia global.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="leading-relaxed">Menyediakan SDM unggul untuk mendukung kebutuhan tenaga kerja di dalam dan luar negeri.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="leading-relaxed">Mendorong lahirnya tenaga kerja yang mandiri, berjiwa wirausaha, serta mampu berkontribusi bagi pembangunan ekonomi bangsa.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="leading-relaxed">Meningkatkan citra tenaga kerja Indonesia di dunia internasional melalui kualitas, integritas, dan religiusitas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="leading-relaxed">Membantu pemerintah dalam mencetak generasi pekerja yang berkualitas dan berdaya saing untuk mengurangi pengangguran.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
              Negara Tujuan Penempatan
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
              Kami menyediakan layanan penempatan pekerja migran Indonesia ke berbagai negara dengan peluang karir terbaik
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover-elevate transition-all duration-300 overflow-hidden cursor-pointer hover:shadow-lg hover:scale-[1.01] md:hover:scale-[1.02]"
                data-testid={`card-service-${service.country.toLowerCase()}`}
                onClick={() => setSelectedCountry(service.country)}
              >
                <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={`${service.country} destination`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1" data-testid={`text-country-${service.country.toLowerCase()}`}>
                      {service.country}
                    </h3>
                  </div>
                </div>
                <CardContent className="p-4 md:p-5 lg:p-6">
                  <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-primary">
                      <Plane className="h-3 w-3 md:h-4 md:w-4" />
                      <span className="font-medium">Tersedia</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary text-xs md:text-sm h-8 md:h-9 px-2 md:px-3">
                      Lihat Detail →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Country Detail Dialog */}
          <Dialog open={selectedCountry !== null} onOpenChange={() => setSelectedCountry(null)}>
            <DialogContent className="max-w-[95vw] sm:max-w-[90vw] md:max-w-2xl lg:max-w-3xl max-h-[85vh] md:max-h-[90vh] overflow-y-auto">
              {selectedCountry && (() => {
                const country = services.find(s => s.country === selectedCountry);
                if (!country) return null;
                
                return (
                  <>
                    <DialogHeader>
                      <div className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden">
                        <img 
                          src={country.image} 
                          alt={`${country.country} destination`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-4 left-6">
                          <DialogTitle className="text-3xl font-bold text-white mb-1">
                            {country.country}
                          </DialogTitle>
                          <DialogDescription className="text-white/90 text-base">
                            {country.description}
                          </DialogDescription>
                        </div>
                      </div>
                    </DialogHeader>

                    <div className="space-y-6 py-4">
                      {/* Sektor Pekerjaan */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Briefcase className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="text-xl font-bold text-foreground">Sektor Pekerjaan</h3>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {country.details.sectors.map((sector, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-foreground/80">
                              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                              <span>{sector}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Gaji */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <DollarSign className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="text-xl font-bold text-foreground">Estimasi Gaji</h3>
                        </div>
                        <p className="text-lg font-semibold text-primary">{country.details.salary}</p>
                        <p className="text-sm text-muted-foreground mt-1">*Tergantung sektor dan pengalaman kerja</p>
                      </div>

                      {/* Persyaratan */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <FileText className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="text-xl font-bold text-foreground">Persyaratan Umum</h3>
                        </div>
                        <ul className="space-y-2">
                          {country.details.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-foreground/80">
                              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefit */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Award className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="text-xl font-bold text-foreground">Benefit & Fasilitas</h3>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {country.details.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-foreground/80">
                              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <MessageSquare className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-foreground mb-2">Tertarik Bekerja di {country.country}?</h4>
                            <p className="text-sm text-muted-foreground mb-4">
                              Konsultasikan kebutuhan dan persyaratan Anda dengan tim kami secara gratis
                            </p>
                            <Button 
                              onClick={() => {
                                setSelectedCountry(null);
                                scrollToSection("contact");
                              }}
                              className="w-full sm:w-auto"
                            >
                              <Phone className="mr-2 h-4 w-4" />
                              Hubungi Kami Sekarang
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })()}
            </DialogContent>
          </Dialog>
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

          {/* Additional Info Section */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <Card className="hover-elevate">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Tentang P3MI</h3>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  <span className="font-semibold">P3MI (Perusahaan Penempatan Pekerja Migran Indonesia)</span> adalah 
                  lembaga resmi yang memiliki izin dari pemerintah untuk menempatkan tenaga kerja Indonesia ke luar negeri.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  PT. Moza Group Indonesia terdaftar resmi sebagai P3MI dengan legalitas lengkap, memastikan setiap proses 
                  penempatan kerja dilakukan sesuai regulasi pemerintah dan memberikan perlindungan maksimal bagi pekerja migran.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Komitmen Kami</h3>
                </div>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Pelatihan berbasis kompetensi standar internasional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Pendampingan penuh dari awal hingga keberangkatan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Pembinaan karakter, akhlak, dan nilai religius</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Kemitraan dengan industri dan lembaga internasional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Jaminan keamanan dan legalitas lengkap</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
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

          {/* Office Gallery Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
                Galeri Kantor
              </h3>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                Kantor kami yang berlokasi di Tangerang, Banten dengan fasilitas lengkap dan profesional
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {officeGalleryImages.map((item, index) => (
                <Card
                  key={index}
                  className="hover-elevate overflow-hidden"
                  data-testid={`card-office-gallery-${index}`}
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
                        <Building2 className="h-5 w-5 text-white" />
                        <h4 className="text-lg font-bold text-white">{item.title}</h4>
                      </div>
                      <p className="text-sm text-white/90">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
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
                        <h4 className="font-semibold text-foreground mb-1">Alamat Kantor</h4>
                        <p className="text-muted-foreground">
                          JL Beringin Raya Blok 42 No.75<br />
                          Kota Tangerang, Provinsi Banten<br />
                          Indonesia
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
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={logoImage} 
                  alt="PT. Moza Group Indonesia Logo" 
                  className="h-12 w-12 object-contain bg-white rounded-lg p-1"
                />
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
              
              <h4 className="font-semibold mb-3 mt-6">Ikuti Kami</h4>
              <div className="flex gap-3">
                <a 
                  href="https://www.instagram.com/mozap3mi/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a 
                  href="https://www.tiktok.com/@mozagroupindonesia_p3mi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                  aria-label="TikTok"
                >
                  <FaTiktok className="h-4 w-4" />
                </a>
                <a 
                  href="https://www.youtube.com/@MozaGroupIndonesia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-4 w-4" />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61583154939665&locale=id_ID" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
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
