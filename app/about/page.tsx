const AboutPage = () => {
  return (
    <section className="pl-[206px]  pt-[170px] max-w-[1400px]">
      <h2 className="font-['Josefin_Sans'] text-[28px] text-[#300c2a] font-bold mb-12">
        About
      </h2>

      <div className="border border-[#bf9899] max-w-[1400px] px-12 py-12 border-[1px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[#664060] font-['IBM_Plex_Mono'] text-[16px] leading-[28px] tracking-wide">
  {/* en */}
          <div className="space-y-6 w-[500px]">
            <p>
              I’m a full-stack developer driven by art, logic, and the joy of play. Before I wrote code, I told stories through music as a solo violist in national orchestras.
            </p>
            <p>
              I’m also a proud member of <a href="https://www.duchess-france.fr/" target="_blank" className="hover:text-[#0324d9] transition-colors">Duchess France</a>, a community that supports and empowers women in tech.
            </p>
            <p>
              My code is precise like a score, but always open to improvisation. I love transforming ideas into interactive experiences that surprise and resonate.
            </p>
          </div>
  {/* fr */}
          <div className="space-y-6 text-[15px] text-[#664060] italic w-[500px] ml-4">
            <p>
              Je suis développeuse full-stack, guidée par l’art, la logique et le goût du jeu. Avant d’écrire du code, je racontais des histoires en musique en tant qu’alto solo dans des orchestres nationaux.
            </p>
            <p>
              Je fais également partie de <a href="https://www.duchess-france.fr/" target="_blank" className="hover:text-[#0324d9] transition-colors">Duchess France</a>, une communauté engagée pour la visibilité et le soutien des femmes dans la tech.
            </p>
            <p>
              Mon code est aussi précis qu’une partition, mais jamais figé : j’aime transformer les idées en expériences interactives qui surprennent et résonnent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
