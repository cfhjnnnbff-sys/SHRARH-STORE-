```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SHRARH STORE - متجر شرار لشحن الألعاب والحسابات</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Google Fonts: Cairo -->
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap" rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            dark: '#0B0E17',
                            card: '#121827',
                            purple: '#8A2BE2',
                            purpleGlow: '#9d35f4',
                            blue: '#007BFF',
                            cyan: '#00F0FF',
                            accent: '#7928CA'
                        }
                    },
                    fontFamily: {
                        cairo: ['Cairo', 'sans-serif']
                    }
                }
            }
        }
    </script>

    <style>
        body {
            font-family: 'Cairo', sans-serif;
            background-color: #0B0E17;
            color: #ffffff;
            overflow-x: hidden;
        }

        /* Glassmorphism effects */
        .glass-panel {
            background: rgba(18, 24, 39, 0.7);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(138, 43, 226, 0.2);
        }

        .glass-card {
            background: rgba(18, 24, 39, 0.85);
            border: 1px solid rgba(255, 255, 255, 0.08);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .glass-card:hover {
            border-color: rgba(138, 43, 226, 0.6);
            box-shadow: 0 0 25px rgba(138, 43, 226, 0.3);
            transform: translateY(-4px);
        }

        /* Neon Glows */
        .purple-glow {
            box-shadow: 0 0 20px rgba(138, 43, 226, 0.5);
        }

        .blue-glow {
            box-shadow: 0 0 20px rgba(0, 123, 255, 0.5);
        }

        .text-glow-purple {
            text-shadow: 0 0 10px rgba(138, 43, 226, 0.7), 0 0 20px rgba(138, 43, 226, 0.4);
        }

        .hero-banner-bg {
            background: linear-gradient(135deg, rgba(11,14,23,0.95) 0%, rgba(138,43,226,0.3) 50%, rgba(0,123,255,0.3) 100%), 
                        url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #0B0E17;
        }
        ::-webkit-scrollbar-thumb {
            background: #8A2BE2;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #9d35f4;
        }
    </style>
</head>
<body class="min-h-screen flex flex-col justify-between selection:bg-brand-purple selection:text-white">

    <!-- HEADER / NAVIGATION BAR -->
    <header class="sticky top-0 z-40 glass-panel border-b border-brand-purple/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
                
                <!-- Right: Logo -->
                <div class="flex items-center gap-3 cursor-pointer" onclick="scrollToSection('hero')">
                    <div class="w-11 h-11 bg-gradient-to-tr from-brand-purple to-brand-blue rounded-xl flex items-center justify-center purple-glow">
                        <i class="fa-solid font-black fa-crown text-2xl text-white"></i>
                    </div>
                    <div>
                        <span class="text-2xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-brand-purple">
                            SHRARH
                        </span>
                        <span class="block text-xs text-brand-cyan tracking-widest -mt-1 font-bold">STORE</span>
                    </div>
                </div>

                <!-- Center: Navigation Links (Desktop) -->
                <nav class="hidden md:flex items-center gap-8 font-semibold text-sm">
                    <a href="#hero" class="text-white hover:text-brand-purple transition-colors flex items-center gap-2">
                        <i class="fa-solid fa-house text-xs"></i> الرئيسية
                    </a>
                    <a href="#games" class="text-gray-300 hover:text-brand-purple transition-colors flex items-center gap-2">
                        <i class="fa-solid fa-gamepad text-xs"></i> شحن الألعاب
                    </a>
                    <a href="#offers" class="text-gray-300 hover:text-brand-purple transition-colors flex items-center gap-2">
                        <i class="fa-solid fa-users text-xs"></i> حسابات الألعاب
                    </a>
                    <a href="#features" class="text-gray-300 hover:text-brand-purple transition-colors flex items-center gap-2">
                        <i class="fa-solid fa-circle-info text-xs"></i> من نحن
                    </a>
                    <a href="#contact" class="text-gray-300 hover:text-brand-purple transition-colors flex items-center gap-2">
                        <i class="fa-solid fa-headset text-xs"></i> تواصل معنا
                    </a>
                </nav>

                <!-- Left: Shopping Cart & WhatsApp Buttons -->
                <div class="flex items-center gap-3 sm:gap-4">
                    <!-- Cart Button -->
                    <button onclick="toggleCartModal()" class="relative p-2.5 glass-panel rounded-xl hover:border-brand-purple text-white transition-all">
                        <i class="fa-solid fa-cart-shopping text-lg"></i>
                        <span id="cartBadge" class="absolute -top-1.5 -right-1.5 bg-brand-purple text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-brand-dark hidden">0</span>
                    </button>

                    <!-- WhatsApp Button -->
                    <a href="https://wa.me/249964892634" target="_blank" class="hidden sm:flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold py-2 px-4 rounded-xl text-sm transition-all shadow-lg hover:shadow-emerald-500/20">
                        <i class="fa-brands fa-whatsapp text-lg"></i>
                        <span>تواصل معنا عبر واتساب</span>
                        <span class="text-xs bg-black/20 px-2 py-0.5 rounded dir-ltr font-mono">0964892634</span>
                    </a>

                    <!-- Mobile Menu Button -->
                    <button onclick="toggleMobileMenu()" class="md:hidden p-2 text-gray-300 hover:text-white">
                        <i class="fa-solid fa-bars text-xl"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Navigation Menu -->
        <div id="mobileMenu" class="hidden md:hidden glass-panel border-t border-brand-purple/20 px-4 pt-2 pb-4 space-y-3">
            <a href="#hero" onclick="toggleMobileMenu()" class="block py-2 text-white font-semibold"><i class="fa-solid fa-house ml-2"></i> الرئيسية</a>
            <a href="#games" onclick="toggleMobileMenu()" class="block py-2 text-gray-300 hover:text-white font-semibold"><i class="fa-solid fa-gamepad ml-2"></i> شحن الألعاب</a>
            <a href="#offers" onclick="toggleMobileMenu()" class="block py-2 text-gray-300 hover:text-white font-semibold"><i class="fa-solid fa-users ml-2"></i> حسابات الألعاب</a>
            <a href="#features" onclick="toggleMobileMenu()" class="block py-2 text-gray-300 hover:text-white font-semibold"><i class="fa-solid fa-circle-info ml-2"></i> من نحن</a>
            <a href="#contact" onclick="toggleMobileMenu()" class="block py-2 text-gray-300 hover:text-white font-semibold"><i class="fa-solid fa-headset ml-2"></i> تواصل معنا</a>
            <a href="https://wa.me/249964892634" target="_blank" class="flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold py-2.5 rounded-xl text-sm">
                <i class="fa-brands fa-whatsapp text-lg"></i>
                <span>واتساب: 0964892634</span>
            </a>
        </div>
    </header>

    <!-- HERO BANNER SECTION -->
    <section id="hero" class="relative hero-banner-bg min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden py-16 border-b border-brand-purple/30">
        <!-- Ambient Glowing Orbs -->
        <div class="absolute top-1/4 right-10 w-72 h-72 bg-brand-purple/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute bottom-10 left-10 w-80 h-80 bg-brand-blue/30 rounded-full blur-3xl pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <!-- Crown Icon -->
            <div class="inline-flex items-center justify-center p-4 bg-brand-purple/20 backdrop-blur-md rounded-2xl border border-brand-purple/50 mb-6 purple-glow">
                <i class="fa-solid fa-crown text-5xl text-brand-purple text-glow-purple"></i>
            </div>

            <h1 class="text-4xl sm:text-6xl font-black tracking-tight mb-4 text-white">
                <span class="block bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-300 to-brand-cyan">
                    SHRARH STORE
                </span>
                <span class="text-2xl sm:text-4xl text-gray-200 mt-2 block font-bold">
                    شحن الألعاب و عرض حسابات الألعاب
                </span>
            </h1>

            <p class="text-lg sm:text-xl font-bold text-gray-300 mb-8 max-w-2xl mx-auto flex items-center justify-center gap-3 flex-wrap">
                <span class="bg-brand-dark/80 px-4 py-1.5 rounded-lg border border-brand-purple/30 text-emerald-400"><i class="fa-solid fa-shield-halved ml-1"></i> أمان</span>
                <span class="text-brand-purple">•</span>
                <span class="bg-brand-dark/80 px-4 py-1.5 rounded-lg border border-brand-purple/30 text-amber-400"><i class="fa-solid fa-bolt ml-1"></i> سرعة</span>
                <span class="text-brand-purple">•</span>
                <span class="bg-brand-dark/80 px-4 py-1.5 rounded-lg border border-brand-purple/30 text-blue-400"><i class="fa-solid fa-tags ml-1"></i> أسعار مناسبة</span>
            </p>

            <!-- Call To Action Button -->
            <a href="#games" class="inline-flex items-center gap-3 bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purpleGlow hover:to-blue-600 text-white text-lg font-black py-4 px-10 rounded-2xl transition-all duration-300 shadow-xl purple-glow hover:scale-105">
                <span>تسوق الآن</span>
                <i class="fa-solid fa-cart-shopping"></i>
            </a>
        </div>
    </section>

    <!-- MAIN CONTENT SECTION -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        <!-- SECTION 1: GAMES CATEGORIES ("أشهر الألعاب المتوفرة لدينا") -->
        <section id="games" class="space-y-8">
            <div class="text-center space-y-3">
                <div class="inline-block h-1 w-20 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full"></div>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-white">أشهر الألعاب المتوفرة لدينا</h2>
                <div class="inline-block h-1 w-20 bg-gradient-to-r from-brand-blue to-brand-purple rounded-full"></div>
            </div>

            <!-- Games Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <!-- Free Fire Card -->
                <div class="glass-card rounded-3xl overflow-hidden relative group">
                    <div class="h-64 sm:h-72 relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80" alt="Free Fire" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent"></div>
                        
                        <div class="absolute bottom-6 right-6 left-6 flex items-end justify-between">
                            <div>
                                <span class="bg-amber-500/20 text-amber-400 border border-amber-500/40 text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block">
                                    <i class="fa-solid fa-fire text-amber-500 ml-1"></i> شحن سريع
                                </span>
                                <h3 class="text-2xl font-black text-white">شحن جواهر فري فاير</h3>
                                <p class="text-sm text-gray-300 mt-1">شحن مباشر عن طريق الآيدي ID بأفضل الأسعار</p>
                            </div>
                            <button onclick="filterOffers('ff')" class="bg-gradient-to-r from-brand-purple to-purple-800 hover:from-brand-purpleGlow hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm flex items-center gap-2">
                                <span>تسوق الآن</span>
                                <i class="fa-solid fa-arrow-left text-xs"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- PUBG Mobile Card -->
                <div class="glass-card rounded-3xl overflow-hidden relative group">
                    <div class="h-64 sm:h-72 relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80" alt="PUBG Mobile" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent"></div>
                        
                        <div class="absolute bottom-6 right-6 left-6 flex items-end justify-between">
                            <div>
                                <span class="bg-brand-blue/20 text-brand-cyan border border-brand-blue/40 text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block">
                                    <i class="fa-solid fa-shield-halved text-brand-blue ml-1"></i> آمن 100%
                                </span>
                                <h3 class="text-2xl font-black text-white">شحن شدات ببجي</h3>
                                <p class="text-sm text-gray-300 mt-1">شحن شدات PUBG Mobile فورياً وسهلاً</p>
                            </div>
                            <button onclick="filterOffers('pubg')" class="bg-gradient-to-r from-brand-blue to-blue-800 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm flex items-center gap-2">
                                <span>تسوق الآن</span>
                                <i class="fa-solid fa-arrow-left text-xs"></i>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- SECTION 2: FEATURED OFFERS ("عروضنا المميزة") -->
        <section id="offers" class="space-y-8">
            <div class="text-center space-y-3">
                <div class="inline-block h-1 w-20 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full"></div>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-white">عروضنا المميزة</h2>
                <div class="inline-block h-1 w-20 bg-gradient-to-r from-brand-blue to-brand-purple rounded-full"></div>
            </div>

            <!-- Offers Filter Buttons -->
            <div class="flex justify-center gap-3">
                <button onclick="filterOffers('all')" id="btn-all" class="filter-btn active bg-brand-purple text-white px-5 py-2 rounded-xl text-sm font-bold transition-all">الكل</button>
                <button onclick="filterOffers('ff')" id="btn-ff" class="filter-btn bg-brand-card text-gray-300 hover:text-white border border-gray-700 px-5 py-2 rounded-xl text-sm font-bold transition-all">فري فاير</button>
                <button onclick="filterOffers('pubg')" id="btn-pubg" class="filter-btn bg-brand-card text-gray-300 hover:text-white border border-gray-700 px-5 py-2 rounded-xl text-sm font-bold transition-all">ببجي موبايل</button>
            </div>

            <!-- Offers Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <!-- Free Fire Offer Card 1 -->
                <div class="offer-card ff glass-card rounded-3xl p-6 relative border border-brand-purple/30 flex flex-col justify-between">
                    <!-- Top Badge -->
                    <div class="absolute -top-3 left-6 bg-gradient-to-r from-brand-purple to-purple-600 text-white text-xs font-black px-4 py-1 rounded-full shadow-lg">
                        <i class="fa-solid fa-fire text-amber-300 ml-1"></i> الأكثر طلباً
                    </div>

                    <div>
                        <!-- Game Thumbnail & Bonus Banner -->
                        <div class="relative h-44 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-purple-500/20 flex items-center justify-center p-4">
                            <div class="text-center">
                                <i class="fa-solid fa-gem text-6xl text-cyan-400 drop-shadow-[0_0_15px_rgba(0,240,255,0.6)] mb-2"></i>
                                <span class="bg-amber-500 text-black font-black text-xs px-3 py-1 rounded-full inline-block shadow-md">
                                    +10 جوهرة هدية 🎁
                                </span>
                            </div>
                            <span class="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-gray-200">
                                Free Fire
                            </span>
                        </div>

                        <h3 class="text-2xl font-black text-white text-center mb-1">100 جوهرة فري فاير</h3>
                        <p class="text-xs text-gray-400 text-center mb-4">+ 10 جوهرة هدية مجانية مع الكود</p>

                        <!-- Price Section -->
                        <div class="text-center bg-brand-purple/10 py-3 rounded-2xl border border-brand-purple/20 mb-6">
                            <span class="text-3xl font-black text-white">10,500</span>
                            <span class="text-sm font-bold text-brand-purple mr-1">د.س</span>
                        </div>
                    </div>

                    <button onclick="openOrderModal('100 جوهرة فري فاير (+10 هدية)', 10500, 'Free Fire')" class="w-full bg-gradient-to-r from-brand-purple to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-black py-3.5 px-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
                        <i class="fa-solid fa-cart-plus"></i>
                        <span>اطلب الآن</span>
                    </button>
                </div>

                <!-- PUBG Mobile Offer Card 2 -->
                <div class="offer-card pubg glass-card rounded-3xl p-6 relative border border-brand-blue/30 flex flex-col justify-between">
                    <div>
                        <!-- Game Thumbnail & Bonus Banner -->
                        <div class="relative h-44 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 border border-blue-500/20 flex items-center justify-center p-4">
                            <div class="text-center">
                                <i class="fa-solid fa-coins text-6xl text-amber-400 drop-shadow-[0_0_15px_rgba(245,158,11,0.6)] mb-2"></i>
                                <span class="bg-brand-blue text-white font-black text-xs px-3 py-1 rounded-full inline-block shadow-md">
                                    شحن فورى المباشر
                                </span>
                            </div>
                            <span class="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-gray-200">
                                PUBG Mobile
                            </span>
                        </div>

                        <h3 class="text-2xl font-black text-white text-center mb-1">60 شدة ببجي</h3>
                        <p class="text-xs text-gray-400 text-center mb-4">60 UC PUBG Mobile شحن فوري بالآيدي</p>

                        <!-- Price Section -->
                        <div class="text-center bg-brand-blue/10 py-3 rounded-2xl border border-brand-blue/20 mb-6">
                            <span class="text-3xl font-black text-white">9,900</span>
                            <span class="text-sm font-bold text-brand-blue mr-1">د.س</span>
                        </div>
                    </div>

                    <button onclick="openOrderModal('60 شدة ببجي (UC)', 9900, 'PUBG Mobile')" class="w-full bg-gradient-to-r from-brand-blue to-blue-700 hover:from-blue-500 hover:to-blue-800 text-white font-black py-3.5 px-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
                        <i class="fa-solid fa-cart-plus"></i>
                        <span>اطلب الآن</span>
                    </button>
                </div>

                <!-- Free Fire Offer Card 3 (310 Diamonds) -->
                <div class="offer-card ff glass-card rounded-3xl p-6 relative border border-brand-purple/30 flex flex-col justify-between">
                    <div>
                        <div class="relative h-44 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-purple-500/20 flex items-center justify-center p-4">
                            <div class="text-center">
                                <i class="fa-solid fa-gem text-6xl text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.6)] mb-2"></i>
                                <span class="bg-amber-500 text-black font-black text-xs px-3 py-1 rounded-full inline-block shadow-md">
                                    +31 جوهرة هدية 🎁
                                </span>
                            </div>
                            <span class="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-gray-200">
                                Free Fire
                            </span>
                        </div>

                        <h3 class="text-2xl font-black text-white text-center mb-1">310 جوهرة فري فاير</h3>
                        <p class="text-xs text-gray-400 text-center mb-4">+ 31 جوهرة إضافية مع العرض</p>

                        <div class="text-center bg-brand-purple/10 py-3 rounded-2xl border border-brand-purple/20 mb-6">
                            <span class="text-3xl font-black text-white">31,000</span>
                            <span class="text-sm font-bold text-brand-purple mr-1">د.س</span>
                        </div>
                    </div>

                    <button onclick="openOrderModal('310 جوهرة فري فاير (+31 هدية)', 31000, 'Free Fire')" class="w-full bg-gradient-to-r from-brand-purple to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-black py-3.5 px-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
                        <i class="fa-solid fa-cart-plus"></i>
                        <span>اطلب الآن</span>
                    </button>
                </div>

                <!-- PUBG Mobile Offer Card 4 (325 UC) -->
                <div class="offer-card pubg glass-card rounded-3xl p-6 relative border border-brand-blue/30 flex flex-col justify-between">
                    <div>
                        <div class="relative h-44 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 border border-blue-500/20 flex items-center justify-center p-4">
                            <div class="text-center">
                                <i class="fa-solid fa-coins text-6xl text-yellow-300 drop-shadow-[0_0_15px_rgba(253,224,71,0.6)] mb-2"></i>
                                <span class="bg-emerald-500 text-white font-black text-xs px-3 py-1 rounded-full inline-block shadow-md">
                                    تخفيض ممتاز ⚡
                                </span>
                            </div>
                            <span class="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-gray-200">
                                PUBG Mobile
                            </span>
                        </div>

                        <h3 class="text-2xl font-black text-white text-center mb-1">325 شدة ببجي</h3>
                        <p class="text-xs text-gray-400 text-center mb-4">300 UC + 25 UC مجاناً</p>

                        <div class="text-center bg-brand-blue/10 py-3 rounded-2xl border border-brand-blue/20 mb-6">
                            <span class="text-3xl font-black text-white">48,500</span>
                            <span class="text-sm font-bold text-brand-blue mr-1">د.س</span>
                        </div>
                    </div>

                    <button onclick="openOrderModal('325 شدة ببجي (UC)', 48500, 'PUBG Mobile')" class="w-full bg-gradient-to-r from-brand-blue to-blue-700 hover:from-blue-500 hover:to-blue-800 text-white font-black py-3.5 px-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
                        <i class="fa-solid fa-cart-plus"></i>
                        <span>اطلب الآن</span>
                    </button>
                </div>

            </div>
        </section>

        <!-- SECTION 3: TRUST BADGES & FEATURES ("مزايانا") -->
        <section id="features" class="glass-card rounded-3xl p-8 border border-brand-purple/20">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                
                <!-- Feature 1 -->
                <div class="flex items-start gap-4">
                    <div class="p-3.5 bg-brand-purple/20 border border-brand-purple/40 rounded-2xl text-brand-purple text-2xl flex-shrink-0">
                        <i class="fa-solid fa-bolt"></i>
                    </div>
                    <div>
                        <h4 class="text-lg font-bold text-white mb-1">تسليم فوري</h4>
                        <p class="text-xs text-gray-400 leading-relaxed">تجهيز وشحن الطلبات في ثوانٍ معدودة فور تأكيد الدفع.</p>
                    </div>
                </div>

                <!-- Feature 2 -->
                <div class="flex items-start gap-4">
                    <div class="p-3.5 bg-brand-blue/20 border border-brand-blue/40 rounded-2xl text-brand-blue text-2xl flex-shrink-0">
                        <i class="fa-solid fa-shield-halved"></i>
                    </div>
                    <div>
                        <h4 class="text-lg font-bold text-white mb-1">أمان تام</h4>
                        <p class="text-xs text-gray-400 leading-relaxed">حماية كاملة لبياناتك وحساباتك وبوسائل دفع موثوقة.</p>
                    </div>
                </div>

                <!-- Feature 3 -->
                <div class="flex items-start gap-4">
                    <div class="p-3.5 bg-purple-500/20 border border-purple-500/40 rounded-2xl text-purple-400 text-2xl flex-shrink-0">
                        <i class="fa-solid fa-headset"></i>
                    </div>
                    <div>
                        <h4 class="text-lg font-bold text-white mb-1">دعم على مدار الساعة</h4>
                        <p class="text-xs text-gray-400 leading-relaxed">فريق متواجد طوال اليوم للرد على استفساراتكم فوراً.</p>
                    </div>
                </div>

                <!-- Feature 4 -->
                <div class="flex items-start gap-4">
                    <div class="p-3.5 bg-emerald-500/20 border border-emerald-500/40 rounded-2xl text-emerald-400 text-2xl flex-shrink-0">
                        <i class="fa-solid fa-tags"></i>
                    </div>
                    <div>
                        <h4 class="text-lg font-bold text-white mb-1">أسعار مناسبة</h4>
                        <p class="text-xs text-gray-400 leading-relaxed">أفضل وأقل الأسعار في السودان لشحن كافة الألعاب.</p>
                    </div>
                </div>

            </div>
        </section>

    </main>

    <!-- FOOTER -->
    <footer id="contact" class="glass-panel border-t border-brand-purple/30 pt-12 pb-6 mt-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                
                <!-- Col 1: Brand Info -->
                <div class="space-y-4">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 bg-brand-purple rounded-xl flex items-center justify-center purple-glow">
                            <i class="fa-solid fa-crown text-xl text-white"></i>
                        </div>
                        <span class="text-xl font-black text-white">SHRARH STORE</span>
                    </div>
                    <p class="text-sm text-gray-400 leading-relaxed">
                        متجر شرار - لأنك تستحق الأفضل. الخيار الأول لشحن جواهر فري فاير وشدات ببجي وحسابات الألعاب في السودان بأعلى أمان وأسرع خدمة.
                    </p>
                </div>

                <!-- Col 2: Quick Links -->
                <div>
                    <h5 class="text-md font-bold text-white mb-4 border-r-4 border-brand-purple pr-3">روابط سريعة</h5>
                    <ul class="space-y-2 text-sm text-gray-400">
                        <li><a href="#hero" class="hover:text-brand-purple transition-colors">• الرئيسية</a></li>
                        <li><a href="#games" class="hover:text-brand-purple transition-colors">• شحن الألعاب</a></li>
                        <li><a href="#offers" class="hover:text-brand-purple transition-colors">• حسابات الألعاب</a></li>
                        <li><a href="#contact" class="hover:text-brand-purple transition-colors">• تواصل معنا</a></li>
                    </ul>
                </div>

                <!-- Col 3: Contact & WhatsApp -->
                <div>
                    <h5 class="text-md font-bold text-white mb-4 border-r-4 border-brand-purple pr-3">تواصل معنا واتساب</h5>
                    <div class="space-y-3">
                        <a href="https://wa.me/249964892634" target="_blank" class="inline-flex items-center gap-2 text-emerald-400 font-mono text-lg font-bold dir-ltr bg-emerald-950/40 px-4 py-2 rounded-xl border border-emerald-500/30 hover:border-emerald-400 transition-all">
                            <i class="fa-brands fa-whatsapp text-xl"></i>
                            <span>0964892634</span>
                        </a>
                        <p class="text-xs text-gray-400">اضغط على الرقم للتواصل المباشر معنا وحجز طلبك عبر الواتساب.</p>
                    </div>
                </div>

                <!-- Col 4: Payment Methods -->
                <div>
                    <h5 class="text-md font-bold text-white mb-4 border-r-4 border-brand-purple pr-3">طرق الدفع المتاحة</h5>
                    <div class="flex flex-wrap gap-3">
                        <!-- Bankak Payment Badge -->
                        <div class="flex items-center gap-2 bg-red-950/40 border border-red-500/30 px-3 py-2 rounded-xl">
                            <i class="fa-solid fa-building-columns text-red-500"></i>
                            <span class="text-xs font-bold text-gray-200">بنكك (Bankak)</span>
                        </div>
                        <!-- Vodafone Cash Badge -->
                        <div class="flex items-center gap-2 bg-purple-950/40 border border-purple-500/30 px-3 py-2 rounded-xl">
                            <i class="fa-solid fa-wallet text-purple-400"></i>
                            <span class="text-xs font-bold text-gray-200">فودافون كاش</span>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Bottom Copyright -->
            <div class="border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
                جميع الحقوق محفوظة - 2025 © <span class="font-bold text-gray-300">SHRARH STORE</span>
            </div>
        </div>
    </footer>

    <!-- ORDER MODAL (Popup for Purchasing) -->
    <div id="orderModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm hidden">
        <div class="glass-card w-full max-w-md rounded-3xl p-6 sm:p-8 border border-brand-purple/40 relative shadow-2xl animate-fade-in">
            <!-- Close Button -->
            <button onclick="closeOrderModal()" class="absolute top-5 left-5 text-gray-400 hover:text-white text-xl">
                <i class="fa-solid fa-xmark"></i>
            </button>

            <!-- Modal Header -->
            <div class="text-center mb-6">
                <div class="w-12 h-12 bg-brand-purple/20 rounded-2xl border border-brand-purple/40 flex items-center justify-center mx-auto mb-3 text-brand-purple text-xl">
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
                <h3 class="text-xl font-black text-white" id="modalTitle">تأكيد طلب الشحن</h3>
                <p class="text-xs text-gray-400 mt-1" id="modalGame">Game Name</p>
            </div>

            <!-- Order Form -->
            <form id="orderForm" onsubmit="submitOrder(event)" class="space-y-4">
                
                <!-- Product & Price Display -->
                <div class="bg-brand-dark/80 p-4 rounded-2xl border border-gray-800 flex items-center justify-between">
                    <span class="text-xs font-bold text-gray-300" id="modalOfferName">اسم الباقة</span>
                    <span class="text-lg font-black text-brand-cyan" id="modalOfferPrice">0 د.س</span>
                </div>

                <!-- Player ID Input -->
                <div>
                    <label class="block text-xs font-bold text-gray-300 mb-1.5">آيدي اللاعب في اللعبة (Player ID) *</label>
                    <input type="text" id="playerId" required placeholder="مثال: 5498102938" class="w-full bg-brand-dark border border-gray-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-purple">
                </div>

                <!-- Player Name (Optional) -->
                <div>
                    <label class="block text-xs font-bold text-gray-300 mb-1.5">اسم الحساب في اللعبة (اختياري)</label>
                    <input type="text" id="playerName" placeholder="مثال: SHRARH_GAMER" class="w-full bg-brand-dark border border-gray-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-purple">
                </div>

                <!-- Payment Method Selection -->
                <div>
                    <label class="block text-xs font-bold text-gray-300 mb-1.5">اختر طريقة الدفع *</label>
                    <select id="paymentMethod" required class="w-full bg-brand-dark border border-gray-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-purple">
                        <option value="بنكك (Bankak)">بنكك (Bankak)</option>
                        <option value="فودافون كاش">فودافون كاش</option>
                    </select>
                </div>

                <!-- Action Buttons -->
                <div class="pt-2 flex items-center gap-3">
                    <button type="submit" class="flex-1 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-black py-3.5 px-4 rounded-xl text-sm transition-all shadow-lg flex items-center justify-center gap-2">
                        <i class="fa-brands fa-whatsapp text-lg"></i>
                        <span>إرسال الطلب عبر واتساب</span>
                    </button>
                    <button type="button" onclick="addToCartCurrent()" class="p-3.5 bg-brand-purple/20 hover:bg-brand-purple/40 border border-brand-purple/50 rounded-xl text-brand-purple text-sm font-bold transition-all" title="إضافة للسلة">
                        <i class="fa-solid fa-cart-plus"></i>
                    </button>
                </div>
            </form>
        </div>
    </div>

    <!-- SHOPPING CART MODAL -->
    <div id="cartModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm hidden">
        <div class="glass-card w-full max-w-lg rounded-3xl p-6 sm:p-8 border border-brand-purple/40 relative shadow-2xl">
            <!-- Close Button -->
            <button onclick="toggleCartModal()" class="absolute top-5 left-5 text-gray-400 hover:text-white text-xl">
                <i class="fa-solid fa-xmark"></i>
            </button>

            <!-- Cart Header -->
            <div class="flex items-center gap-3 border-b border-gray-800 pb-4 mb-4">
                <i class="fa-solid fa-cart-shopping text-2xl text-brand-purple"></i>
                <h3 class="text-xl font-black text-white">سلة المشتريات</h3>
            </div>

            <!-- Cart Items Container -->
            <div id="cartItems" class="space-y-3 max-h-60 overflow-y-auto pr-1 mb-6">
                <!-- Dynamically populated via JS -->
            </div>

            <!-- Cart Summary & Checkout -->
            <div id="cartFooter" class="border-t border-gray-800 pt-4 space-y-4">
                <div class="flex items-center justify-between text-base font-black">
                    <span class="text-gray-300">الإجمالي:</span>
                    <span id="cartTotal" class="text-brand-cyan text-xl">0 د.س</span>
                </div>
                <button onclick="checkoutCartWhatsApp()" class="w-full bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-black py-3.5 px-4 rounded-xl text-sm transition-all shadow-lg flex items-center justify-center gap-2">
                    <i class="fa-brands fa-whatsapp text-lg"></i>
                    <span>إتمام الطلب بالكامل عبر واتساب</span>
                </button>
            </div>
        </div>
    </div>

    <!-- JAVASCRIPT LOGIC -->
    <script>
        // Shopping Cart State
        let cart = [];
        let currentActiveItem = null;

        // Smooth Scrolling Function
        function scrollToSection(id) {
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        }

        // Toggle Mobile Menu
        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('hidden');
        }

        // Filter Offers Functionality
        function filterOffers(category) {
            const cards = document.querySelectorAll('.offer-card');
            const btns = document.querySelectorAll('.filter-btn');

            // Reset active button states
            btns.forEach(btn => {
                btn.classList.remove('bg-brand-purple', 'text-white');
                btn.classList.add('bg-brand-card', 'text-gray-300');
            });

            // Set active clicked button
            const activeBtn = document.getElementById(`btn-${category}`);
            if(activeBtn) {
                activeBtn.classList.add('bg-brand-purple', 'text-white');
                activeBtn.classList.remove('bg-brand-card', 'text-gray-300');
            }

            // Show/Hide Cards
            cards.forEach(card => {
                if (category === 'all' || card.classList.contains(category)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });

            scrollToSection('offers');
        }

        // Open Order Modal with Product Details
        function openOrderModal(title, price, game) {
            currentActiveItem = { title, price, game };
            document.getElementById('modalOfferName').innerText = title;
            document.getElementById('modalOfferPrice').innerText = price.toLocaleString() + ' د.س';
            document.getElementById('modalGame').innerText = game;
            document.getElementById('orderModal').classList.remove('hidden');
        }

        // Close Order Modal
        function closeOrderModal() {
            document.getElementById('orderModal').classList.add('hidden');
        }

        // Submit Order Direct via WhatsApp
        function submitOrder(e) {
            e.preventDefault();
            const playerId = document.getElementById('playerId').value;
            const playerName = document.getElementById('playerName').value || 'غير محدد';
            const paymentMethod = document.getElementById('paymentMethod').value;

            if(!playerId) {
                alert('يرجى إدخال آيدي اللاعب بشكل صحيح');
                return;
            }

            const message = `مرحباً متجر SHRARH STORE 👑%0Aأرغب في شراء العرض التالي:%0A%0A🎮 *الخدمة:* ${currentActiveItem.title}%0A💰 *السعر:* ${currentActiveItem.price.toLocaleString()} د.س%0A🆔 *آيدي اللاعب:* ${playerId}%0A👤 *اسم الحساب:* ${playerName}%0A💳 *طريقة الدفع:* ${paymentMethod}`;

            window.open(`https://wa.me/249964892634?text=${message}`, '_blank');
            closeOrderModal();
        }

        // Add current modal item to Shopping Cart
        function addToCartCurrent() {
            const playerId = document.getElementById('playerId').value;
            if(!playerId) {
                alert('يرجى إدخال آيدي اللاعب أولاً لإضافة المنتج للسلة');
                return;
            }

            cart.push({
                ...currentActiveItem,
                playerId: playerId,
                id: Date.now()
            });

            updateCartUI();
            closeOrderModal();
            alert('تمت إضافة العرض إلى سلة المشتريات بنجاح! 🛒');
        }

        // Toggle Shopping Cart Modal
        function toggleCartModal() {
            const cartModal = document.getElementById('cartModal');
            cartModal.classList.toggle('hidden');
        }

        // Update Shopping Cart UI & Badge
        function updateCartUI() {
            const cartBadge = document.getElementById('cartBadge');
            const cartItemsContainer = document.getElementById('cartItems');
            const cartTotal = document.getElementById('cartTotal');

            // Badge Count
            if(cart.length > 0) {
                cartBadge.innerText = cart.length;
                cartBadge.classList.remove('hidden');
            } else {
                cartBadge.classList.add('hidden');
            }

            // Populate Cart Items
            if(cart.length === 0) {
                cartItemsContainer.innerHTML = '<p class="text-center text-gray-500 py-6 text-sm">سلة المشتريات فارغة حالياً</p>';
                cartTotal.innerText = '0 د.س';
                return;
            }

            let total = 0;
            cartItemsContainer.innerHTML = cart.map((item, index) => {
                total += item.price;
                return `
                    <div class="bg-brand-dark/80 p-3 rounded-xl border border-gray-800 flex items-center justify-between gap-3 text-sm">
                        <div>
                            <p class="font-bold text-white">${item.title}</p>
                            <p class="text-xs text-gray-400">ID: ${item.playerId}</p>
                        </div>
                        <div class="flex items-center gap-3">
                            <span class="font-bold text-brand-cyan">${item.price.toLocaleString()} د.س</span>
                            <button onclick="removeFromCart(${index})" class="text-red-400 hover:text-red-300 text-xs">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </div>
                `;
            }).join('');

            cartTotal.innerText = total.toLocaleString() + ' د.س';
        }

        // Remove single item from cart
        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCartUI();
        }

        // Checkout full cart via WhatsApp
        function checkoutCartWhatsApp() {
            if(cart.length === 0) {
                alert('السلة فارغة!');
                return;
            }

            let message = `مرحباً SHRARH STORE 👑%0Aأود إتمام طلب السلة الآتي:%0A%0A`;
            let total = 0;

            cart.forEach((item, idx) => {
                total += item.price;
                message += `*${idx + 1}. ${item.title}*%0A• ID: ${item.playerId}%0A• السعر: ${item.price.toLocaleString()} د.س%0A------------------%0A`;
            });

            message += `%0A💰 *الإجمالي النهائي:* ${total.toLocaleString()} د.س`;
            window.open(`https://wa.me/249964892634?text=${message}`, '_blank');
        }
    </script>
</body>
</html>
```