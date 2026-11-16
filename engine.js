/* Moteur de démonstration : règles locales, pas un modèle d'IA entraîné. */
window.VyroEngine = {
  create(prompt, mood) {
    const idea = prompt.trim();
    const styles = {
      cinematic: ["Une ouverture spectaculaire présente le monde et son mystère.","Le personnage avance et découvre un indice inattendu.","Un obstacle met son courage et ses choix à l'épreuve.","Une révélation donne un nouveau sens à toute l'histoire."],
      adventure: ["Le voyage commence avec une mission claire.","Une découverte entraîne le héros plus loin que prévu.","Un défi inattendu oblige à trouver une solution.","La mission se termine par une découverte mémorable."],
      fantasy: ["Un monde extraordinaire dévoile ses premières merveilles.","Un secret ancien attire le personnage vers l'inconnu.","Une force mystérieuse bouleverse son parcours.","Un nouvel équilibre ouvre la porte à d'autres aventures."],
      inspiring: ["Un rêve prend forme malgré les difficultés.","Un premier petit succès donne confiance.","Un défi apprend une leçon importante.","La persévérance transforme le rêve en nouveau départ."],
      documentary: ["Le sujet est présenté avec son contexte.","Les faits et les détails essentiels sont explorés.","Un exemple concret illustre son importance.","La conclusion résume les découvertes principales."]
    };
    const names = ["Introduction","Développement","Moment clé","Conclusion"];
    return {title: idea.length > 58 ? idea.slice(0,55)+"…" : idea, scenes: styles[mood] || styles.cinematic, names};
  }
};