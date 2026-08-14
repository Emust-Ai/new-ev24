"use client";

import { useState } from "react";

const Icon = ({ name, size = 18 }) => {
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    bolt: <path d="m13 2-9 11h7l-1 9 9-12h-7l1-8Z"/>,
    check: <path d="m5 12 4 4L19 6"/>,
    chat: <><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/><path d="M8 9h8M8 13h5"/></>,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/>,
    play: <path d="m8 5 11 7-11 7Z"/>,
    network: <><circle cx="12" cy="5" r="3"/><circle cx="5" cy="18" r="3"/><circle cx="19" cy="18" r="3"/><path d="m10.5 7.6-4 7.1M13.5 7.6l4 7.1M8 18h8"/></>,
    spark: <><path d="m12 3-1.5 4.5L6 9l4.5 1.5L12 15l1.5-4.5L18 9l-4.5-1.5L12 3Z"/><path d="m5 15-.7 2.3L2 18l2.3.7L5 21l.7-2.3L8 18l-2.3-.7L5 15Z"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
};

const channels = [
  { id: "whatsapp", label: "WhatsApp", mark: "WA", color: "#1b9a59", logo: "https://cdn.simpleicons.org/whatsapp/25D366" },
  { id: "instagram", label: "Instagram", mark: "IG", color: "#d34375", logo: "https://cdn.simpleicons.org/instagram/E4405F" },
  { id: "email", label: "Email", mark: "@", color: "#4a68c7", icon: "email" },
  { id: "sms", label: "SMS", mark: "SMS", color: "#7b5eb5", icon: "sms" },
  { id: "telegram", label: "Telegram", mark: "TG", color: "#278ac2", logo: "https://cdn.simpleicons.org/telegram/26A5E4" },
  { id: "web", label: "Web widget", mark: "W", color: "#392951", icon: "web" },
];

const marqueeChannels = [...channels, { id: "voice", label: "Voice", color: "#f47b37", icon: "voice" }];
const bookingUrl = "https://bookings.cloud.microsoft/book/AskInnovation@ask-innovation.com/?ismsaljsauthenabled";

const french = {
  "Platform": "Plateforme", "Channels": "Canaux", "Network": "Réseau", "About": "À propos", "See the platform": "Voir la plateforme", "Book a demo": "Demander une démo",
  "The e-mobility helpdesk built for the AI agent era": "Le helpdesk de l'e-mobilité conçu pour l'ère des agents IA",
  "Automate support for your EV charging users.": "Automatisez l'assistance de vos utilisateurs de bornes.", "Manage it all from one place.": "Pilotez tout depuis un seul espace.",
  "Automate support for EV charging users and manage every message, call and charger issue from one place. EV24 gives CPOs and eMSPs the context to resolve requests without losing the human connection.": "Automatisez l'assistance de vos utilisateurs de bornes et pilotez chaque message, appel et incident de recharge depuis un seul espace. EV24 donne aux CPO et eMSP tout le contexte nécessaire pour résoudre les demandes sans perdre le lien humain.",
  "Book a personalised demo": "Demander une démo personnalisée", "Explore the platform": "Explorer la plateforme", "chargers connected": "bornes connectées", "6 channels": "6 canaux", "plus voice in one inbox": "et la voix dans une seule boîte", "7 days": "7j/7", "support availability": "support disponible",
  "One workspace for every way customers reach you": "Un seul espace pour tous les canaux de vos clients", "Email": "E-mail", "Web widget": "Widget web", "Voice": "Téléphonie",
  "Built for charging operations": "Conçu pour les opérations de recharge", "Turn support moments into confident resolutions.": "Transformez chaque demande en résolution maîtrisée.",
  "When a driver is stuck, context matters. EV24 puts the conversation, customer history and charger status together, giving agents and AI the complete picture.": "Lorsqu'un conducteur est bloqué, le contexte est essentiel. EV24 réunit la conversation, l'historique client et l'état de la borne pour offrir une vue complète aux agents et à l'IA.",
  "Know what happened before you reply.": "Comprenez la situation avant de répondre.", "Bring charger alerts, session details and past conversations into the same support view.": "Réunissez les alertes des bornes, les détails de session et les échanges précédents dans une même vue.", "Connected operations": "Opérations connectées", "Online": "En ligne", "Charging": "En charge", "Available": "Disponible",
  "Summarise": "Résumer", "Connect": "Connecter", "Suggest": "Suggérer", "AI that assists, not interrupts.": "Une IA qui assiste sans interrompre.", "Summarise conversations, surface relevant context and prepare responses while your team stays in control.": "Résumez les échanges, faites remonter le bon contexte et préparez les réponses tout en gardant votre équipe aux commandes.",
  "Call summary generated": "Résumé d'appel généré", "Issue resolved": "Problème résolu", "Never lose what was said.": "Ne perdez plus rien de vos échanges.", "Record, transcribe and revisit VoIP calls alongside every other customer interaction.": "Enregistrez, transcrivez et consultez les appels VoIP avec toutes les autres interactions clients.",
  "Omnichannel by design": "Omnicanal par conception", "One inbox. No fragmented conversations.": "Une seule boîte. Aucune conversation fragmentée.", "Meet drivers on the channel they already use, while your team works from one clear, shared view.": "Échangez avec les conducteurs sur leur canal habituel pendant que votre équipe travaille depuis une vue unique et partagée.",
  "Open conversations": "Conversations ouvertes", "Customer support": "Support client", "Just now": "À l'instant", "Linked to charger": "Liée à la borne", "conversation": "conversation", "The charger accepted my card, but the cable is still locked. Can you help?": "La borne a accepté ma carte, mais le câble reste verrouillé. Pouvez-vous m'aider ?", "Customer and charger context matched": "Contexte client et borne associés", "Of course. I can see your charging session has ended. I’ll release the connector remotely now.": "Bien sûr. Votre session est terminée. Je déverrouille le connecteur à distance.", "Reply to Anna...": "Répondre à Anna...", "Conversation summary": "Résumé de la conversation", "Customer’s cable remained locked after ending their session.": "Le câble du client est resté verrouillé après la fin de sa session.", "Recommended action": "Action recommandée", "Send remote unlock command and confirm connector release.": "Envoyer la commande de déverrouillage et confirmer la libération du connecteur.", "Use suggested reply": "Utiliser la réponse suggérée",
  "Voice, fully visible": "La voix, entièrement visible", "Every call becomes useful context.": "Chaque appel devient un contexte utile.", "Listen to recordings, search accurate transcripts and catch up through AI summaries. Calls become part of the customer record instead of disappearing when they end.": "Écoutez les enregistrements, recherchez dans les transcriptions et retrouvez l'essentiel grâce aux résumés IA. Chaque appel enrichit le dossier client au lieu de disparaître une fois terminé.", "VoIP call recordings": "Enregistrements des appels VoIP", "Searchable transcripts": "Transcriptions consultables", "AI-generated summaries": "Résumés générés par l'IA", "Call with Marc Dubois": "Appel avec Marc Dubois", "Today": "Aujourd'hui", "Resolved": "Résolu", "Agent": "Agent", "I can see that charger from here. The payment was accepted, but the handshake timed out.": "Je vois la borne. Le paiement a été accepté, mais la connexion avec le véhicule a expiré.", "Okay, the light has turned green now. It’s starting.": "D'accord, le voyant vient de passer au vert. La recharge démarre.", "AI summary": "Résumé IA", "Remote restart restored the charger connection. Customer confirmed the session started successfully.": "Le redémarrage à distance a rétabli la connexion. Le client a confirmé le démarrage de la recharge.",
  "Connected across Europe": "Connecté à travers l'Europe", "Support that speaks to your charging network.": "Un support connecté à votre réseau de recharge.", "EV24 connects with CPO and eMSP environments, so support teams can move from “we’ll investigate” to an informed answer while the driver is still there.": "EV24 se connecte aux environnements CPO et eMSP pour permettre aux équipes de support de fournir une réponse éclairée pendant que le conducteur est encore sur place.", "connected chargers": "bornes connectées", "operator integrations": "intégrations opérateurs", "mobility integrations": "intégrations mobilité", "Support layer": "Couche de support",
  "A big thank you to WattzHub for their rigour and professionalism. A team that is always attentive and available.": "Un grand merci à WattzHub pour sa rigueur et son sérieux. Une équipe toujours à l'écoute et disponible.",
  "Support the next charge": "Accompagnez la prochaine recharge", "Give every driver a better answer.": "Offrez une meilleure réponse à chaque conducteur.", "See how EV24 can connect your conversations, calls and charging operations.": "Découvrez comment EV24 relie vos conversations, vos appels et vos opérations de recharge.",
  "Intelligent customer support for electric mobility.": "Le support client intelligent pour la mobilité électrique.", "AI assistance": "Assistance IA", "Omnichannel inbox": "Boîte omnicanale", "Integrations": "Intégrations", "Company": "Entreprise", "About EV24": "À propos d'EV24", "Contact": "Contact", "Office": "Bureau", "Built for electric mobility across Europe": "Conçu pour la mobilité électrique en Europe",
  "Search...": "Rechercher...", "My Inbox": "Ma boîte", "Conversations": "Conversations", "All conversations": "Toutes les conversations", "Mentions": "Mentions", "Participating": "Participation", "Teams": "Équipes", "Voice support": "Support téléphonique", "Available agent": "Disponible", "Channel": "Canal", "Mine": "À moi", "Unassigned": "Non assignées", "All": "Toutes", "Now": "Maintenant", "Call recording": "Enregistrement de l'appel", "Connector is still locked...": "Le connecteur reste verrouillé...", "Receipt for yesterday’s session": "Reçu de la session d'hier", "Thanks, charging has started": "Merci, la recharge a démarré", "Resolve": "Résoudre", "Station": "Borne", "Connected": "Connectée",
  "Hello, the charger recognised my badge, but the session has not started.": "Bonjour, la borne a reconnu mon badge, mais la recharge n'a pas démarré.", "I can help. The station is online, but the connector handshake timed out. I’m restarting it remotely now.": "Je vais vous aider. La borne est en ligne, mais la connexion avec le véhicule a expiré. Je la redémarre à distance.", "AI context found": "Contexte trouvé par l'IA", "Remote restart completed. Charger is ready and awaiting the vehicle.": "Redémarrage terminé. La borne est prête et attend le véhicule.", "Reply": "Répondre", "Private note": "Note privée", "Type a reply or use an AI suggestion...": "Rédigez une réponse ou utilisez une suggestion IA...", "Add labels": "Ajouter des étiquettes", "Conversation information": "Informations de la conversation", "Network label": "Réseau", "Generated summary": "Résumé généré", "The driver’s badge was accepted but charging did not begin. A connector handshake timeout was detected and the agent sent a remote restart.": "Le badge du conducteur a été accepté, mais la recharge n'a pas démarré. Une expiration de connexion a été détectée et l'agent a lancé un redémarrage à distance.", "Contact attributes": "Attributs du contact", "Previous conversations": "Conversations précédentes"
};

function ChannelMark({ channel }) {
  if (channel.logo) return <img src={channel.logo} alt={`Logo ${channel.label}`}/>;

  const symbols = {
    email: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    sms: <><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/><path d="M8 11h.01M12 11h.01M16 11h.01"/></>,
    web: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.3 3 14.7 0 18M12 3c-3 3.3-3 14.7 0 18"/></>,
    voice: <><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/></>,
  };

  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{symbols[channel.icon]}</svg>;
}

function ChannelMarquee({ t }) {
  return (
    <div className="channel-marquee">
      <div className="marquee-track">
        {[0, 1].map((set) => (
          <div className="marquee-set" key={set} aria-hidden={set === 1}>
            {marqueeChannels.map((channel) => (
              <div className="marquee-item" key={`${set}-${channel.id}`}>
                <span className="marquee-logo" style={{color: channel.color}}><ChannelMark channel={channel}/></span>
                <strong>{t(channel.label)}</strong>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Brand() {
  return <a className="brand" href="#top" aria-label="EV24 home"><img src="https://www.ev24.io/wp-content/uploads/2022/08/Logo-EV24_Plan-de-travail-1-4-e1661949153322.png" alt="EV24, support solution for EV charging"/></a>;
}

function ProductInbox({ t }) {
  return (
    <div className="product-shell" aria-label="EV24 support workspace preview">
      <div className="product-body">
        <aside className="app-sidebar">
          <div className="workspace-name"><img src="https://www.ev24.io/wp-content/uploads/2022/09/cropped-Icone-EV24-01-1-e1662036272822-32x32.png" alt="Icône de l'espace EV24"/><strong>EV24</strong><span>⌄</span></div>
          <div className="workspace-search">⌕ <span>{t("Search...")}</span></div>
          <div className="side-nav-item"><Icon name="chat" size={14}/> {t("My Inbox")} <b>4</b></div>
          <div className="side-nav-item side-active"><Icon name="chat" size={14}/> {t("Conversations")} <span>⌃</span></div>
          <div className="side-sub active">{t("All conversations")}</div>
          <div className="side-sub">{t("Mentions")}</div>
          <div className="side-sub">{t("Participating")}</div>
          <div className="side-label">{t("Teams")}</div>
          <div className="side-nav-item"><Icon name="network" size={14}/> EV24 Support</div>
          <div className="side-label">{t("Channels")}</div>
          <div className="side-sub">WhatsApp Europe</div>
          <div className="side-sub">EV24 Web Chat</div>
          <div className="side-sub active">{t("Voice support")}</div>
          <div className="side-agent"><div className="avatar avatar-small">AL</div><div><strong>Alex Martin</strong><small>{t("Available agent")}</small></div></div>
        </aside>
        <div className="inbox-list">
          <div className="inbox-heading"><div><small>{t("Channel")}</small><strong>{t("Voice")}</strong></div><span>+</span></div>
          <div className="filter-row"><span>{t("Mine")} 6</span><span>{t("Unassigned")} 18</span><span className="active">{t("All")} 24</span></div>
          <div className="conversation selected"><span className="channel-dot call"><Icon name="phone" size={12}/></span><div><div className="conversation-top"><strong>Claire Bernard</strong><time>{t("Now")}</time></div><p>{t("Call recording")} · 01:48</p><small>{t("Station")} #FR-732</small></div></div>
          <div className="conversation"><span className="channel-dot wa">WA</span><div><div className="conversation-top"><strong>Jonas Weber</strong><time>8m</time></div><p>{t("Connector is still locked...")}</p><small>{t("Station")} #DE-418</small></div></div>
          <div className="conversation"><span className="channel-dot mail">@</span><div><div className="conversation-top"><strong>Elena Rossi</strong><time>21m</time></div><p>{t("Receipt for yesterday’s session")}</p><small>{t("Station")} #IT-096</small></div></div>
          <div className="conversation"><span className="channel-dot call"><Icon name="phone" size={12}/></span><div><div className="conversation-top"><strong>Thomas Leroy</strong><time>34m</time></div><p>{t("Call recording")} · 03:12</p><small>{t("Station")} #BE-221</small></div></div>
          <div className="conversation"><span className="channel-dot wa">WA</span><div><div className="conversation-top"><strong>Noor de Vries</strong><time>1h</time></div><p>{t("Thanks, charging has started")}</p><small>{t("Station")} #NL-507</small></div></div>
        </div>
        <div className="chat-panel">
          <div className="chat-header"><div className="avatar">CB</div><div><strong>Claire Bernard</strong><small>#4812 · {t("Voice")}</small></div><button>{t("Resolve")}⌄</button></div>
          <div className="context-strip"><span><Icon name="bolt" size={13}/> {t("Station")} #FR-732</span><span className="status-ok"><i/> {t("Connected")}</span><span>50 kW DC</span></div>
          <div className="messages"><div className="date-label">{t("Today")}, 10:24</div><div className="message customer">{t("Hello, the charger recognised my badge, but the session has not started.")}</div><div className="message agent">{t("I can help. The station is online, but the connector handshake timed out. I’m restarting it remotely now.")}</div><div className="recording"><span><Icon name="play" size={12}/></span><div><strong>{t("Call recording")}</strong><small>00:00 / 01:48</small></div><div className="recording-wave"><i/><i/><i/><i/><i/><i/><i/><i/></div></div><div className="ai-note"><span><Icon name="spark" size={14}/> {t("AI context found")}</span><p>{t("Remote restart completed. Charger is ready and awaiting the vehicle.")}</p></div></div>
          <div className="composer"><div className="composer-tabs"><b>{t("Reply")}</b><span>{t("Private note")}</span></div><div className="composer-input"><span>{t("Type a reply or use an AI suggestion...")}</span><button><Icon name="arrow" size={16}/></button></div></div>
        </div>
        <aside className="details-panel"><div className="details-action">+ {t("Add labels")}</div><div className="details-section"><strong>{t("Conversation information")}</strong><span>−</span></div><div className="detail-row"><span>{t("Network label")}</span><strong>Demo Mobility</strong></div><div className="detail-row"><span>{t("Station")}</span><strong>FR-732</strong></div><div className="details-section"><strong>{t("AI summary")}</strong><span>−</span></div><div className="detail-box"><span><Icon name="spark" size={12}/> {t("Generated summary")}</span><p>{t("The driver’s badge was accepted but charging did not begin. A connector handshake timeout was detected and the agent sent a remote restart.")}</p></div><div className="details-section"><strong>{t("Contact attributes")}</strong><span>+</span></div><div className="details-section"><strong>{t("Previous conversations")}</strong><span>+</span></div></aside>
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeChannel, setActiveChannel] = useState("whatsapp");
  const [language, setLanguage] = useState("fr");
  const active = channels.find((channel) => channel.id === activeChannel);
  const t = (text) => language === "fr" ? french[text] ?? text : text;
  const changeLanguage = (nextLanguage) => {
    setLanguage(nextLanguage);
    document.documentElement.lang = nextLanguage;
  };

  return (
    <main id="top">
      <header className="nav-wrap"><nav className="nav container"><Brand/><div className={`nav-links ${menuOpen ? "open" : ""}`}><a href="#platform" onClick={() => setMenuOpen(false)}>{t("Platform")}</a><a href="#channels" onClick={() => setMenuOpen(false)}>{t("Channels")}</a><a href="#network" onClick={() => setMenuOpen(false)}>{t("Network")}</a><a href="#about" onClick={() => setMenuOpen(false)}>{t("About")}</a><a className="mobile-cta" href={bookingUrl}>{t("Book a demo")}</a></div><div className="nav-actions"><a className="text-link" href="#platform">{t("See the platform")}</a><div className="language-switch" role="group" aria-label="Language"><button className={language === "fr" ? "active" : ""} onClick={() => changeLanguage("fr")} aria-pressed={language === "fr"}>FR</button><button className={language === "en" ? "active" : ""} onClick={() => changeLanguage("en")} aria-pressed={language === "en"}>EN</button></div><a className="button button-dark" href={bookingUrl}>{t("Book a demo")} <Icon name="arrow" size={16}/></a></div><div className="mobile-language language-switch" role="group" aria-label="Language"><button className={language === "fr" ? "active" : ""} onClick={() => changeLanguage("fr")}>FR</button><button className={language === "en" ? "active" : ""} onClick={() => changeLanguage("en")}>EN</button></div><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}><Icon name={menuOpen ? "close" : "menu"}/></button></nav></header>

      <section className="hero container">
        <div className="eyebrow"><span><Icon name="spark" size={15}/></span><i/>{t("The e-mobility helpdesk built for the AI agent era")}</div>
        <h1>{t("Automate support for your EV charging users.")}<br/><em>{t("Manage it all from one place.")}</em></h1>
        <p className="hero-copy">{t("Automate support for EV charging users and manage every message, call and charger issue from one place. EV24 gives CPOs and eMSPs the context to resolve requests without losing the human connection.")}</p>
        <div className="hero-actions"><a className="button button-green" href={bookingUrl}>{t("Book a personalised demo")} <Icon name="arrow" size={17}/></a><a className="button button-ghost" href="#platform"><span className="play-icon"><Icon name="play" size={13}/></span>{t("Explore the platform")}</a></div>
        <div className="hero-proof"><div><strong>10,000+</strong><span>{t("chargers connected")}</span></div><i/><div><strong>{t("6 channels")}</strong><span>{t("plus voice in one inbox")}</span></div><i/><div><strong>{t("7 days")}</strong><span>{t("support availability")}</span></div></div>
      </section>

      <section className="product-stage container"><div className="stage-glow"/><ProductInbox t={t}/></section>

      <section className="trust" aria-label="Supported channels"><p>{t("One workspace for every way customers reach you")}</p><ChannelMarquee t={t}/></section>

      <section className="section container network-section-early" id="network"><div className="network-panel"><div className="network-copy"><span className="kicker">{t("Connected across Europe")}</span><h2>{t("Support that speaks to your charging network.")}</h2><p>{t("EV24 connects with CPO and eMSP environments, so support teams can move from “we’ll investigate” to an informed answer while the driver is still there.")}</p><div className="network-stats"><div><strong>10k+</strong><span>{t("connected chargers")}</span></div><div><strong>CPO</strong><span>{t("operator integrations")}</span></div><div><strong>eMSP</strong><span>{t("mobility integrations")}</span></div></div></div><div className="network-graphic"><div className="network-ring outer"><span className="node node-a">CPO</span><span className="node node-b">eMSP</span><span className="node node-c"><Icon name="bolt" size={17}/></span></div><div className="network-ring inner"/><div className="network-core"><div className="brand-mark"><Icon name="bolt" size={20}/></div><strong>EV24</strong><span>{t("Support layer")}</span></div><div className="pulse-line line-a"/><div className="pulse-line line-b"/></div></div></section>

      <section className="section container" id="platform"><div className="section-intro"><div><span className="kicker">{t("Built for charging operations")}</span><h2>{t("Turn support moments into confident resolutions.")}</h2></div><p>{t("When a driver is stuck, context matters. EV24 puts the conversation, customer history and charger status together, giving agents and AI the complete picture.")}</p></div>
        <div className="outcome-grid">
          <article className="outcome-card outcome-large"><div className="card-copy"><span className="number">01</span><h3>{t("Know what happened before you reply.")}</h3><p>{t("Bring charger alerts, session details and past conversations into the same support view.")}</p><a href="#contact">{t("Connected operations")} <Icon name="arrow" size={15}/></a></div><div className="station-visual"><div className="map-lines"><i/><i/><i/></div><div className="station-pin pin-one"><span><Icon name="bolt" size={15}/></span><div><strong>FR-204</strong><small>{t("Online")} · 22 kW</small></div></div><div className="station-pin pin-two"><span><Icon name="bolt" size={15}/></span><div><strong>BE-118</strong><small>{t("Charging")} · 50 kW</small></div></div><div className="station-pin pin-three"><span><Icon name="bolt" size={15}/></span><div><strong>NL-072</strong><small>{t("Available")} · 150 kW</small></div></div></div></article>
          <article className="outcome-card"><span className="number">02</span><div className="ai-orbit"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><span><Icon name="spark" size={27}/></span><div className="ai-orbit-carrier carrier-one"><div className="orbit-label">{t("Summarise")}</div></div><div className="ai-orbit-carrier carrier-two"><div className="orbit-label">{t("Connect")}</div></div><div className="ai-orbit-carrier carrier-three"><div className="orbit-label">{t("Suggest")}</div></div></div><h3>{t("AI that assists, not interrupts.")}</h3><p>{t("Summarise conversations, surface relevant context and prepare responses while your team stays in control.")}</p></article>
          <article className="outcome-card dark-card"><span className="number">03</span><div className="mini-transcript"><div className="speaker"><span>AI</span><p>{t("Call summary generated")}</p><small>01:42</small></div><div className="transcript-lines"><i/><i/><i/></div><div className="sentiment"><i/> {t("Issue resolved")}</div></div><h3>{t("Never lose what was said.")}</h3><p>{t("Record, transcribe and revisit VoIP calls alongside every other customer interaction.")}</p></article>
        </div>
      </section>

      <section className="channel-section" id="channels"><div className="container"><div className="section-intro compact"><div><span className="kicker">{t("Omnichannel by design")}</span><h2>{t("One inbox. No fragmented conversations.")}</h2></div><p>{t("Meet drivers on the channel they already use, while your team works from one clear, shared view.")}</p></div>
        <div className="channel-demo"><div className="channel-tabs">{channels.map((channel) => <button key={channel.id} className={activeChannel === channel.id ? "active" : ""} onClick={() => setActiveChannel(channel.id)}><span style={{background: channel.color}}>{channel.mark}</span>{t(channel.label)}</button>)}</div><div className="channel-preview"><div className="preview-sidebar"><span>{t("Open conversations")}</span><strong>{t("Customer support")}</strong><div className="preview-person selected"><i style={{background: active.color}}>{active.mark}</i><div><b>Anna Keller</b><small>{t(active.label)} · {t("Just now")}</small></div></div><div className="preview-person"><i>MB</i><div><b>Marco Bianchi</b><small>{t("Email")} · 8 min</small></div></div><div className="preview-person"><i>SL</i><div><b>Sarah Lewis</b><small>{t("Voice")} · 21 min</small></div></div></div><div className="preview-chat"><div className="preview-head"><div><span style={{background: active.color}}>{active.mark}</span><strong>{t(active.label)} {t("conversation")}</strong></div><small>{t("Linked to charger")} #DE-204</small></div><div className="preview-messages"><div className="bubble">{t("The charger accepted my card, but the cable is still locked. Can you help?")}</div><div className="translation">{t("Customer and charger context matched")}</div><div className="bubble reply">{t("Of course. I can see your charging session has ended. I’ll release the connector remotely now.")}</div></div><div className="preview-compose"><span>{t("Reply to Anna...")}</span><button><Icon name="arrow" size={16}/></button></div></div><div className="preview-ai"><div className="ai-title"><span><Icon name="spark" size={16}/></span><strong>EV24 AI</strong></div><div className="ai-block"><small>{t("Conversation summary")}</small><p>{t("Customer’s cable remained locked after ending their session.")}</p></div><div className="ai-block"><small>{t("Recommended action")}</small><p>{t("Send remote unlock command and confirm connector release.")}</p></div><button><Icon name="check" size={14}/> {t("Use suggested reply")}</button></div></div>
      </div></div></section>

      <section className="section container voice-section"><div className="voice-panel"><div className="voice-copy"><span className="kicker kicker-light">{t("Voice, fully visible")}</span><h2>{t("Every call becomes useful context.")}</h2><p>{t("Listen to recordings, search accurate transcripts and catch up through AI summaries. Calls become part of the customer record instead of disappearing when they end.")}</p><ul><li><Icon name="check" size={16}/> {t("VoIP call recordings")}</li><li><Icon name="check" size={16}/> {t("Searchable transcripts")}</li><li><Icon name="check" size={16}/> {t("AI-generated summaries")}</li></ul></div><div className="audio-card"><div className="audio-head"><div className="avatar">MD</div><div><strong>{t("Call with Marc Dubois")}</strong><small>{t("Today")}, 10:24 · 04:18</small></div><span>{t("Resolved")}</span></div><div className="waveform"><button><Icon name="play" size={16}/></button><div className="waves">{[18,30,14,38,25,46,22,34,17,41,29,50,20,36,27,44,16,31,23,39,19,33,15,27,12,21].map((height, index) => <i key={index} style={{height}}/> )}</div><time>02:14</time></div><div className="transcript"><div><span>{t("Agent")}</span><p>{t("I can see that charger from here. The payment was accepted, but the handshake timed out.")}</p><time>02:08</time></div><div className="highlight-line"><span>Marc</span><p>{t("Okay, the light has turned green now. It’s starting.")}</p><time>02:16</time></div></div><div className="call-summary"><span><Icon name="spark" size={15}/> {t("AI summary")}</span><p>{t("Remote restart restored the charger connection. Customer confirmed the session started successfully.")}</p></div></div></div></section>

      <section className="section container testimonial-section" id="about"><div className="quote-mark">“</div><blockquote>{t("A big thank you to WattzHub for their rigour and professionalism. A team that is always attentive and available.")}</blockquote><div className="quote-by"><div className="avatar">FB</div><div><strong>Freddy Boukhris</strong><span>Borneeco</span></div></div></section>

      <section className="cta-section" id="contact"><div className="container"><div className="cta-panel"><div><span className="kicker kicker-light">{t("Support the next charge")}</span><h2>{t("Give every driver a better answer.")}</h2><p>{t("See how EV24 can connect your conversations, calls and charging operations.")}</p></div><div className="cta-actions"><a className="button button-white" href={bookingUrl}>{t("Book a personalised demo")} <Icon name="arrow" size={17}/></a><span>front@ask-innovation.com<br/>+33 1 85 41 28 67</span></div></div></div></section>

      <footer><div className="container footer-main"><div className="footer-brand"><Brand/><p>{t("Intelligent customer support for electric mobility.")}</p></div><div><strong>{t("Platform")}</strong><a href="#platform">{t("AI assistance")}</a><a href="#channels">{t("Omnichannel inbox")}</a><a href="#network">{t("Integrations")}</a></div><div><strong>{t("Company")}</strong><a href="#about">{t("About EV24")}</a><a href="mailto:front@ask-innovation.com">{t("Contact")}</a><a href="https://www.linkedin.com/company/ask-innovation/">LinkedIn</a></div><div><strong>{t("Office")}</strong><p>3 Boulevard Thomas Gobert<br/>91120 Palaiseau<br/>Paris-Saclay, France</p></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} EV24 by Ask Innovation</span><span>{t("Built for electric mobility across Europe")}</span></div></footer>
    </main>
  );
}

export default App;
