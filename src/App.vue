<script setup lang="ts">
import { computed, ref } from "vue";
import SequoIcon from "./components/SequoIcon.vue";
import { publicContact } from "./content/site";

const menuOpen = ref(false);
const menuToggle = ref<HTMLButtonElement | null>(null);
function closeMenuAndFocus() {
  menuOpen.value = false;
  menuToggle.value?.focus();
}
const activeStep = ref(0);
const activeRole = ref(0);
const steps = [
  {
    title: "Vos commerces, à portée de main.",
    label: "Choisir",
    copy: "Parcourez les produits des commerçants, composez votre panier et personnalisez les articles qui proposent des options.",
    icon: "bag",
  },
  {
    title: "Une commande. Des étapes claires.",
    label: "Suivre",
    copy: "Retrouvez votre commande et suivez sa préparation, sa prise en charge puis sa remise, depuis le même espace.",
    icon: "route",
  },
  {
    title: "À domicile ou en point relais.",
    label: "Recevoir",
    copy: "Choisissez parmi les destinations proposées pour votre panier. En relais, votre code de retrait vous accompagne jusqu’à la remise du colis.",
    icon: "pin",
  },
];
const roles = [
  {
    name: "Client",
    app: "SEQUO",
    icon: "bag",
    title: "Votre quartier, dans votre poche.",
    copy: "Les produits de vos commerçants et le suivi de vos achats, réunis dans une seule application.",
    features: [
      "Catalogue et panier avec options disponibles",
      "Négociation sur les produits autorisés",
      "Suivi des commandes et demandes de retour éligibles",
    ],
    action: "Me renseigner sur l’accès",
    subject: "Découvrir SEQUO — client",
    screenLabel: "Votre commande",
    screenTitle: "Gardez le fil.",
    screenText:
      "Préparation, livraison ou retrait : retrouvez les étapes de votre commande.",
    tags: ["Panier", "Commandes", "Retours"],
  },
  {
    name: "Commerçant",
    app: "SEQUO Vendor",
    icon: "store",
    title: "Votre boutique. Votre activité.",
    copy: "Publiez vos produits et gardez une vue claire sur les commandes à préparer, les retours et les états de règlement.",
    features: [
      "Catalogue, photos et options produits",
      "Acceptation et préparation des commandes",
      "Ventes, retours et états de règlement",
    ],
    action: "Présenter ma boutique",
    subject: "Rejoindre SEQUO — commerçant",
    screenLabel: "Votre boutique",
    screenTitle: "Prêt pour la suite.",
    screenText:
      "Recevez les commandes, préparez vos articles et signalez quand le colis est prêt.",
    tags: ["Catalogue", "Préparation", "Activité"],
  },
  {
    name: "Livreur",
    app: "SEQUO Rider",
    icon: "route",
    title: "Chaque mission, étape par étape.",
    copy: "Consultez vos missions, prenez en charge les colis et confirmez leur remise avec les justificatifs demandés.",
    features: [
      "Missions et détail de la destination",
      "Prise en charge et remise vérifiée",
      "Signalement des problèmes et historique",
    ],
    action: "Devenir livreur partenaire",
    subject: "Rejoindre SEQUO — livreur",
    screenLabel: "Votre mission",
    screenTitle: "Le bon colis. Au bon endroit.",
    screenText:
      "Les informations utiles pour avancer de la collecte à la remise.",
    tags: ["Missions", "Remise", "Historique"],
  },
  {
    name: "Point relais",
    app: "SEQUO Hub",
    icon: "parcel",
    title: "Un lien de proximité en plus.",
    copy: "Accueillez les colis éligibles, suivez leur présence au relais et vérifiez chaque retrait avec le client.",
    features: [
      "Réception et emplacement des colis",
      "Retrait avec code et vérification d’identité",
      "Historique, retards et réception des retours éligibles",
    ],
    action: "Proposer un point relais",
    subject: "Rejoindre SEQUO — point relais",
    screenLabel: "Votre point relais",
    screenTitle: "Chaque remise compte.",
    screenText:
      "Une réception enregistrée, un retrait vérifié et un historique conservé.",
    tags: ["Réception", "Retrait", "Historique"],
  },
];
const role = computed(() => roles[activeRole.value]!);
const contactUrl = (subject: string) =>
  `mailto:${publicContact.email}?subject=${encodeURIComponent(subject)}`;
const faqs = [
  {
    q: "Comment accéder aux applications ?",
    a: "Le lancement public est en préparation. Contactez SEQUO pour connaître les possibilités d’accès et les zones disponibles. Les liens officiels de téléchargement seront publiés ici lorsqu’ils seront disponibles.",
  },
  {
    q: "Puis-je faire livrer tous les produits en point relais ?",
    a: "Non. Le retrait en relais dépend du panier et de la disponibilité du point choisi. Les produits alimentaires, périssables et sensibles sont exclus de ce mode de réception.",
  },
  {
    q: "Comment fonctionne la négociation ?",
    a: "Certains commerçants autorisent les offres sur leurs produits. Les échanges et le prix accepté sont enregistrés dans l’application. Un prix accepté reste valable 24 heures pour le client et le produit concernés.",
  },
  {
    q: "Puis-je demander un retour ?",
    a: "Pour une commande et des produits éligibles, une demande peut être déposée dans les 72 heures suivant la livraison. Vous retrouvez ensuite son statut et les instructions dans l’application. Un remboursement dépend de la réception et de la vérification du retour.",
  },
  {
    q: "Les paiements mobiles sont-ils déjà disponibles ?",
    a: "Les connexions aux opérateurs de paiement sont en préparation. Les paiements, remboursements et versements électroniques ne sont pas encore ouverts au public. Aucune opération réelle n’est proposée par ce site.",
  },
  {
    q: "Y a-t-il déjà des abonnements ou des récompenses de parrainage ?",
    a: "Ces offres ne sont pas activées. Leurs conditions et leurs tarifs seront communiqués après validation par SEQUO.",
  },
];
</script>

<template>
  <a class="skip-link" href="#contenu">Aller au contenu</a>
  <header class="site-header">
    <a
      class="brand"
      href="#accueil"
      aria-label="SEQUO — accueil"
      @click="menuOpen = false"
    >
      <img src="/images/sequo-logo.png" alt="SEQUO" width="145" height="52" />
    </a>
    <button
      ref="menuToggle"
      class="menu-toggle"
      @keydown.esc.prevent="closeMenuAndFocus"
      type="button"
      :aria-expanded="menuOpen"
      aria-controls="navigation"
      @click="menuOpen = !menuOpen"
    >
      <SequoIcon :name="menuOpen ? 'close' : 'menu'" />
      <span>{{ menuOpen ? "Fermer" : "Menu" }}</span>
    </button>
    <nav
      id="navigation"
      :class="{ 'is-open': menuOpen }"
      aria-label="Navigation principale"
      @keydown.esc.prevent="closeMenuAndFocus"
    >
      <a href="#experience" @click="menuOpen = false">L’expérience SEQUO</a>
      <a href="#espaces" @click="menuOpen = false">À chacun son espace</a>
      <a href="#questions" @click="menuOpen = false">Vos questions</a>
      <a class="button button-small" href="#contact" @click="menuOpen = false"
        >Parlons-en <SequoIcon name="arrow"
      /></a>
    </nav>
  </header>

  <main id="contenu">
    <section id="accueil" class="hero wrap" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow">
          <span class="status-dot"></span> Le commerce local, mieux connecté
        </p>
        <h1 id="hero-title">Tout près.<br />Tout <em>simplement.</em></h1>
        <p class="hero-lead">
          Vos commerçants. Vos achats. Votre livraison.<br
            class="desktop-break"
          />
          SEQUO rapproche tout ce qui compte au quotidien.
        </p>
        <div class="hero-actions">
          <a class="button" href="#experience"
            >Découvrir SEQUO <SequoIcon name="arrow"
          /></a>
          <a class="text-link" href="#espaces"
            >Trouver mon espace <SequoIcon name="arrow-down"
          /></a>
        </div>
        <div class="launch-note">
          <span class="status-dot"></span>
          <p>
            Lancement public en préparation.<br /><a href="#contact"
              >Échangez avec l’équipe pour en savoir plus.</a
            >
          </p>
        </div>
      </div>
      <figure class="hero-visual">
        <img
          class="hero-photo"
          src="/images/commerce-local.webp"
          alt="Illustration : une commerçante remet un colis à un livreur devant une boutique de quartier."
          width="960"
          height="1200"
          fetchpriority="high"
        />
        <div class="handoff-note">
          <span class="icon-circle"><SequoIcon name="check" /></span>
          <div>
            <strong>Du commerce à votre porte.</strong
            ><span>Et un lien à chaque étape.</span>
          </div>
        </div>
        <figcaption>
          Une vision du quotidien avec SEQUO · Illustration
        </figcaption>
        <span class="visual-spark" aria-hidden="true">✳</span>
      </figure>
    </section>

    <div class="ecosystem-strip wrap" aria-label="Les acteurs SEQUO">
      <p>Un même lien.<br /><strong>Quatre façons d’avancer.</strong></p>
      <span><SequoIcon name="bag" /> Clients</span
      ><span><SequoIcon name="store" /> Commerçants</span
      ><span><SequoIcon name="route" /> Livreurs</span
      ><span><SequoIcon name="parcel" /> Points relais</span>
    </div>

    <section
      id="experience"
      class="experience section-space"
      aria-labelledby="experience-title"
    >
      <div class="wrap experience-grid">
        <div class="experience-copy">
          <p class="eyebrow">Le quotidien, plus fluide</p>
          <h2 id="experience-title">
            De l’envie<br />à la <em>remise en main.</em>
          </h2>
          <p class="section-intro">
            Un parcours simple pour acheter auprès de vos commerçants et garder
            le fil de votre commande.
          </p>
          <div
            class="step-list"
            role="group"
            aria-label="Explorer les étapes d’une commande"
          >
            <button
              v-for="(step, index) in steps"
              :key="step.label"
              :aria-pressed="activeStep === index"
              type="button"
              :class="{ active: activeStep === index }"
              @click="activeStep = index"
            >
              <span class="step-number">0{{ index + 1 }}</span
              ><span
                ><strong>{{ step.title }}</strong
                ><span v-if="activeStep === index" class="step-description">{{
                  step.copy
                }}</span></span
              ><SequoIcon name="arrow" />
            </button>
          </div>
          <p class="eligibility-note">
            <SequoIcon name="info" /> Les destinations et options dépendent des
            produits et des services disponibles.
          </p>
        </div>
        <div class="app-stage">
          <span class="stage-label"
            ><span class="status-dot"></span> L’expérience côté client</span
          >
          <figure class="phone-preview">
            <div class="phone-top">
              <span>9:41</span><span aria-hidden="true">● ● ▰</span>
            </div>
            <div class="phone-brand">
              <img
                src="/images/sequo-logo.png"
                alt="SEQUO"
                width="100"
                height="36"
              /><span class="avatar" aria-hidden="true">A</span>
            </div>
            <div class="phone-content" aria-live="polite" aria-atomic="true">
              <template v-if="activeStep === 0">
                <p class="phone-eyebrow">À deux pas de vous</p>
                <h3>Le local a<br />de belles choses.</h3>
                <div class="sample-search">
                  <SequoIcon name="search" /> Un produit, une envie…
                </div>
                <div class="sample-product">
                  <div
                    class="product-drawing basket-drawing"
                    aria-hidden="true"
                  >
                    <SequoIcon name="bag" />
                  </div>
                  <div>
                    <span>La sélection du quartier</span
                    ><strong>Artisanat & quotidien</strong>
                  </div>
                  <SequoIcon name="arrow" />
                </div>
                <div class="sample-product">
                  <div
                    class="product-drawing fabric-drawing"
                    aria-hidden="true"
                  >
                    <SequoIcon name="store" />
                  </div>
                  <div>
                    <span>Des boutiques à découvrir</span
                    ><strong>Mode & accessoires</strong>
                  </div>
                  <SequoIcon name="arrow" />
                </div>
                <div class="phone-tip">
                  <SequoIcon name="bag" /><span
                    >Vos choix réunis<br /><strong
                      >dans un même panier.</strong
                    ></span
                  >
                </div>
              </template>
              <template v-else-if="activeStep === 1">
                <p class="phone-eyebrow">Votre commande</p>
                <h3>Elle avance.<br />Vous le savez.</h3>
                <div class="order-banner">
                  <SequoIcon name="parcel" />
                  <div>
                    <span>Statut de la commande</span
                    ><strong>En préparation</strong>
                  </div>
                </div>
                <ol class="sample-timeline">
                  <li class="done">
                    <span></span>
                    <div>
                      <strong>Commande enregistrée</strong
                      ><small>Retrouvez vos articles</small>
                    </div>
                  </li>
                  <li class="current">
                    <span></span>
                    <div>
                      <strong>Préparation en cours</strong
                      ><small>Le commerçant prépare le colis</small>
                    </div>
                  </li>
                  <li>
                    <span></span>
                    <div>
                      <strong>Prise en charge</strong
                      ><small>La prochaine étape</small>
                    </div>
                  </li>
                  <li>
                    <span></span>
                    <div>
                      <strong>Remise de votre commande</strong
                      ><small>À domicile ou en relais</small>
                    </div>
                  </li>
                </ol>
              </template>
              <template v-else>
                <p class="phone-eyebrow">Votre destination</p>
                <h3>La réception<br />qui vous convient.</h3>
                <div class="destination-choice">
                  <span class="icon-circle"><SequoIcon name="home" /></span>
                  <div>
                    <strong>À domicile</strong
                    ><span>À la destination de votre commande</span>
                  </div>
                </div>
                <div class="destination-choice selected">
                  <span class="icon-circle"><SequoIcon name="pin" /></span>
                  <div>
                    <strong>En point relais</strong
                    ><span>Pour les paniers éligibles</span>
                  </div>
                  <SequoIcon name="check" />
                </div>
                <div class="phone-tip">
                  <SequoIcon name="shield" /><span
                    >Un code personnel<br /><strong
                      >pour vérifier votre retrait.</strong
                    ></span
                  >
                </div>
                <p class="phone-small">
                  Le point relais et son état de disponibilité sont vérifiés
                  pour votre commande.
                </p>
              </template>
            </div>
            <div class="phone-bottom" aria-hidden="true">
              <SequoIcon name="home" /><SequoIcon name="bag" /><SequoIcon
                name="parcel"
              /><SequoIcon name="person" />
            </div>
            <figcaption>
              Illustration du parcours · données de démonstration
            </figcaption>
          </figure>
          <span class="stage-decoration" aria-hidden="true">sequo.</span>
        </div>
      </div>
    </section>

    <section
      class="receipt-section section-space wrap"
      aria-labelledby="receipt-title"
    >
      <div class="receipt-heading">
        <p class="eyebrow">À votre rythme</p>
        <h2 id="receipt-title">
          Le dernier kilomètre.<br /><em>La même attention.</em>
        </h2>
        <p class="section-intro">
          Un colis ne s’arrête pas à une adresse. Il arrive entre de bonnes
          mains, avec une remise enregistrée.
        </p>
      </div>
      <div class="receipt-options">
        <article class="receipt-option">
          <span class="outline-icon"><SequoIcon name="home" /></span>
          <div>
            <h3>On vient à vous.</h3>
            <p>
              Une livraison à la destination choisie, un statut à suivre et une
              remise confirmée.
            </p>
          </div>
          <span class="receipt-index">01</span>
        </article>
        <article class="receipt-option">
          <span class="outline-icon"><SequoIcon name="pin" /></span>
          <div>
            <h3>Vous passez au relais.</h3>
            <p>
              Un point disponible pour votre panier, un colis réceptionné et
              votre code pour le retirer.
            </p>
            <small>Hors produits alimentaires, périssables et sensibles.</small>
          </div>
          <span class="receipt-index">02</span>
        </article>
      </div>
    </section>

    <section
      id="espaces"
      class="roles-section section-space"
      aria-labelledby="roles-title"
    >
      <div class="wrap">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Un écosystème, des liens humains</p>
            <h2 id="roles-title">À chacun<br /><em>son espace.</em></h2>
          </div>
          <p class="section-intro">
            Derrière chaque commande, des personnes.<br />Et des outils qui les
            aident à avancer ensemble.
          </p>
        </div>
        <div
          class="role-switcher"
          role="group"
          aria-label="Choisir un espace SEQUO"
        >
          <button
            v-for="(item, index) in roles"
            :key="item.name"
            type="button"
            :aria-pressed="activeRole === index"
            @click="activeRole = index"
          >
            <SequoIcon :name="item.icon" />{{ item.name }}
          </button>
        </div>
        <div class="role-panel" aria-live="polite" aria-atomic="true">
          <div class="role-copy">
            <p class="eyebrow">{{ role.app }}</p>
            <h3>{{ role.title }}</h3>
            <p>{{ role.copy }}</p>
            <ul>
              <li v-for="feature in role.features" :key="feature">
                <SequoIcon name="check" />{{ feature }}
              </li>
            </ul>
            <a class="button" :href="contactUrl(role.subject)"
              >{{ role.action }}<SequoIcon name="arrow"
            /></a>
          </div>
          <div class="role-visual">
            <span class="role-orbit" aria-hidden="true"></span>
            <div class="role-app-mark" aria-hidden="true">
              <SequoIcon :name="role.icon" />
            </div>
            <div class="role-message">
              <span>{{ role.screenLabel }}</span
              ><strong>{{ role.screenTitle }}</strong>
              <p>{{ role.screenText }}</p>
              <div class="role-tags">
                <span v-for="tag in role.tags" :key="tag">{{ tag }}</span>
              </div>
            </div>
            <small>Un aperçu des usages de {{ role.app }}</small>
          </div>
        </div>
      </div>
    </section>

    <section
      id="projet"
      class="care-section section-space wrap"
      aria-labelledby="care-title"
    >
      <div class="care-title">
        <p class="eyebrow">Ce qui fait le lien</p>
        <h2 id="care-title">Moins de flou.<br /><em>Plus de confiance.</em></h2>
      </div>
      <div class="care-points">
        <article>
          <SequoIcon name="route" />
          <h3>Les étapes sont visibles.</h3>
          <p>
            Commandes, préparations et remises s’inscrivent dans un historique
            consultable par les personnes concernées.
          </p>
        </article>
        <article>
          <SequoIcon name="shield" />
          <h3>Les remises sont vérifiées.</h3>
          <p>
            Les codes et confirmations demandés encadrent la remise des
            commandes et le retrait en relais.
          </p>
        </article>
        <article>
          <SequoIcon name="return" />
          <h3>Les retours ont un suivi.</h3>
          <p>
            Une demande éligible, des instructions et un statut. La suite du
            retour reste visible dans votre espace.
          </p>
        </article>
      </div>
    </section>

    <section
      id="questions"
      class="faq-section section-space"
      aria-labelledby="faq-title"
    >
      <div class="wrap faq-grid">
        <div>
          <p class="eyebrow">Avant de se lancer</p>
          <h2 id="faq-title">On vous<br /><em>répond.</em></h2>
          <p class="section-intro">
            Le fonctionnement, les possibilités<br />et ce qui arrive ensuite.
          </p>
          <a class="text-link" :href="contactUrl('Une question sur SEQUO')"
            >Une autre question ? <SequoIcon name="arrow"
          /></a>
        </div>
        <div class="faq-list">
          <details v-for="faq in faqs" :key="faq.q">
            <summary>
              {{ faq.q }}<span class="faq-plus" aria-hidden="true">+</span>
            </summary>
            <p>{{ faq.a }}</p>
          </details>
        </div>
      </div>
    </section>

    <section
      id="contact"
      class="contact-section wrap"
      aria-labelledby="contact-title"
    >
      <div class="contact-inner">
        <div>
          <p class="eyebrow">Faisons connaissance</p>
          <h2 id="contact-title">
            Le prochain lien,<br /><em>c’est peut-être vous.</em>
          </h2>
          <p>
            Une boutique, une envie de livrer, un lieu pour accueillir les colis
            ? Ou simplement l’envie de découvrir SEQUO ? Parlons-en.
          </p>
          <a
            class="button button-light"
            :href="contactUrl('Faisons connaissance — SEQUO')"
            >Écrire à l’équipe <SequoIcon name="arrow" /></a
          ><a class="contact-email" :href="contactUrl('Bonjour SEQUO')">{{
            publicContact.email
          }}</a>
        </div>
        <span class="contact-art" aria-hidden="true">s<span>✳</span></span>
      </div>
      <div class="availability-note">
        <SequoIcon name="info" />
        <p>
          <strong>Le lancement public se prépare.</strong> Les zones de service
          et les accès aux applications seront annoncés par SEQUO. Les paiements
          électroniques et les offres d’abonnement restent en préparation.
        </p>
      </div>
    </section>
  </main>

  <footer class="site-footer wrap">
    <div class="footer-main">
      <a class="brand" href="#accueil" aria-label="SEQUO — retour à l’accueil"
        ><img src="/images/sequo-logo.png" alt="SEQUO" width="145" height="52"
      /></a>
      <p>Le commerce local.<br />Les liens en plus.</p>
      <nav aria-label="Liens de bas de page">
        <a href="#experience">L’expérience</a><a href="#espaces">Les espaces</a
        ><a href="#questions">Vos questions</a
        ><a href="#contact">Nous contacter</a>
      </nav>
    </div>
    <div class="footer-bottom">
      <p>© {{ new Date().getFullYear() }} SEQUO Services</p>
      <p>
        Illustrations de présentation. Disponibilité selon les services ouverts
        par SEQUO.
      </p>
      <a href="#accueil">En haut <SequoIcon name="arrow-up" /></a>
    </div>
  </footer>
</template>
