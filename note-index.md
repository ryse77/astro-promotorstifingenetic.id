---
import BaseLayout from '@/layouts/BaseLayout.astro';
import Hero from '@/components/Hero.astro';
import BenefitsSection from '@/components/BenefitsSection.astro';
import { SITE_CONFIG } from '@/lib/constants';
import { generateGeneralWhatsAppURL } from '@/lib/whatsapp';

const waUrl = generateGeneralWhatsAppURL();
---

<BaseLayout
  title="Beranda"
  description={SITE_CONFIG.description}
  schemaType="Organization"
>
  <!-- Hero Section -->
  <Hero
    title="Official Promotor STIFIn Genetic"
    subtitle="✨ Raih Income 10 Juta/bulan dari Bisnis Tes Minat Bakat."
    description="Promotor STIFIn Genetic ID adalah website resmi untuk pendaftaran Promotor STIFIn dan Tes STIFIn di Indonesia."
    ctaText="Hubungi Kami"
    ctaUrl={waUrl}
  />

  <!-- Main Content Section -->
  <section class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-5xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            🔊 PENDAFTARAN PROMOTOR STIFIn SE INDONESIA
          </h2>
          <p class="text-xl md:text-2xl text-gray-700 mb-6">
            🎯 <strong>Ingin penghasilan tambahan dari pekerjaan yang fleksibel?</strong>
          </p>
          <p class="text-lg text-gray-700 mb-8">
            Gabung bersama tim <strong>Promotor STIFIn Genetic</strong> kami dan membantu banyak orang mengenali potensinya!
          </p>
          <p class="text-lg text-gray-700">
            🧠 STIFIn adalah metode mengenali potensi diri berbasis sidik jari, dan kini Anda bisa jadi bagian dari tim yang menyebarkan manfaat ini ke lebih banyak orang
          </p>
        </div>

        <!-- Apa Itu Promotor -->
        <div class="bg-primary-50 rounded-2xl p-8 mb-12">
          <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            💡 Apa Itu Promotor STIFIn?
          </h3>
          <p class="text-lg text-gray-700">
            Promotor STIFIn adalah orang yang berlisensi resmi untuk menyebarkan konsep STIFIn, memberikan layanan tes & konsultasi, sekaligus menjelaskan hasil tes kepada klien.
          </p>
        </div>

        <!-- Benefits -->
        <div class="mb-12">
          <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Yang Akan Kamu Dapat?
          </h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white border-2 border-primary-200 rounded-xl p-6 hover:shadow-lg transition">
              <div class="flex items-start space-x-3">
                <span class="text-2xl">✅</span>
                <p class="text-gray-800">Potensi Pendapatan <strong>&gt; 10 JUTA/BULAN</strong> dari layanan tes dan konsultasi</p>
              </div>
            </div>

            <div class="bg-white border-2 border-primary-200 rounded-xl p-6 hover:shadow-lg transition">
              <div class="flex items-start space-x-3">
                <span class="text-2xl">✅</span>
                <p class="text-gray-800">Kerja <strong>FLEKSIBEL</strong>: bebas waktu & tempat</p>
              </div>
            </div>

            <div class="bg-white border-2 border-primary-200 rounded-xl p-6 hover:shadow-lg transition">
              <div class="flex items-start space-x-3">
                <span class="text-2xl">✅</span>
                <p class="text-gray-800">Bisa <strong>BUKA RUANG KONSULTASI</strong> sendiri untuk membantu orang lain</p>
              </div>
            </div>

            <div class="bg-white border-2 border-primary-200 rounded-xl p-6 hover:shadow-lg transition">
              <div class="flex items-start space-x-3">
                <span class="text-2xl">✅</span>
                <p class="text-gray-800">Kelas Pendampingan <strong>EKSKLUSIF</strong>: upgrade skill & strategi</p>
              </div>
            </div>

            <div class="bg-white border-2 border-primary-200 rounded-xl p-6 hover:shadow-lg transition">
              <div class="flex items-start space-x-3">
                <span class="text-2xl">✅</span>
                <p class="text-gray-800">Sekali Investasi, <strong>UNTUNG BERKALI-KALI</strong></p>
              </div>
            </div>

            <div class="bg-white border-2 border-primary-200 rounded-xl p-6 hover:shadow-lg transition">
              <div class="flex items-start space-x-3">
                <span class="text-2xl">✅</span>
                <p class="text-gray-800">Bimbingan langsung dari <strong>Expert STIFIn</strong></p>
              </div>
            </div>

            <div class="bg-white border-2 border-primary-200 rounded-xl p-6 hover:shadow-lg transition">
              <div class="flex items-start space-x-3">
                <span class="text-2xl">✅</span>
                <p class="text-gray-800">Reward Jalan-jalan Di <strong>DALAM/LUAR NEGERI</strong> ✈️</p>
              </div>
            </div>

            <div class="bg-white border-2 border-primary-200 rounded-xl p-6 hover:shadow-lg transition">
              <div class="flex items-start space-x-3">
                <span class="text-2xl">✅</span>
                <p class="text-gray-800">Marketing tools, konten promosi, hingga landing page pribadi</p>
              </div>
            </div>

            <div class="bg-white border-2 border-primary-200 rounded-xl p-6 hover:shadow-lg transition md:col-span-2">
              <div class="flex items-start space-x-3">
                <span class="text-2xl">✅</span>
                <p class="text-gray-800">Nama & kontak tampil di website resmi STIFIn</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Dengan Jadi Promotor -->
        <div class="bg-secondary-50 rounded-2xl p-8 mb-12">
          <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            ❤️ Dengan Jadi Promotor STIFIn, Kamu Bisa:
          </h3>
          <div class="space-y-4">
            <div class="flex items-start space-x-3">
              <span class="text-xl">🔸</span>
              <p class="text-lg text-gray-800">Membantu orang lebih mengenal potensi dan jati dirinya</p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-xl">🔸</span>
              <p class="text-lg text-gray-800">Menjadi bagian dari gerakan mencerdaskan bangsa</p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-xl">🔸</span>
              <p class="text-lg text-gray-800">Mewujudkan penghasilan sambil berdampak sosial</p>
            </div>
          </div>
        </div>

        <!-- Siapa Pun Bisa -->
        <div class="bg-gradient-to-r from-primary-100 to-secondary-100 rounded-2xl p-8 mb-12 text-center">
          <p class="text-xl md:text-2xl font-bold text-gray-900">
            📌 Siapa pun bisa, tanpa batas usia atau latar belakang!
          </p>
        </div>

        <!-- CTA -->
        <div class="text-center bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-10">
          <h3 class="text-2xl md:text-3xl font-bold text-white mb-6">
            Info Pendaftaran Promotor STIFIn Se-Indonesia, Hubungi:
          </h3>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center space-x-3 bg-white text-primary-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-50 transition-all transform hover:scale-105 shadow-2xl"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>WhatsApp</span>
          </a>
          <p class="mt-6 text-white text-lg">
            {SITE_CONFIG.whatsapp.displayNumber}
          </p>
        </div>
      </div>
    </div>
  </section>
</BaseLayout>
