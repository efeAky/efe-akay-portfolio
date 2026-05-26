import Image from "next/image";
import SocialLinks from "@/components/profile/SocialLinks";

export default function ProfileCard() {
  return (
    <div className="space-y-1">
      <div className="relative inline-block">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse-slow"></div>
        <Image
          src="/EfeAkayPhoto.jpg"
          alt="Efe Akay"
          width={224}
          height={224}
          className="relative rounded-full object-cover border-4 border-surface-container-high shadow-2xl"
          style={{ objectPosition: "center 20%" }}
          priority
        />
      </div>
      <h1 className="text-4xl font-bold text-on-surface">Efe Akay</h1>
      <p className="text-xl font-medium text-primary">Full-Stack Developer</p>
      <SocialLinks />
      <p className="text-body-lg text-on-surface-variant">
        As a Computer Science graduate, I specialize in building secure and
        scalable web applications using modern frameworks. I efficiently
        leverage AI tools to streamline development, enhance debugging, and
        support architectural integrity in my work.
      </p>
    </div>
  );
}
