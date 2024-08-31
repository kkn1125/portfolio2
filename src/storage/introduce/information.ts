import { Skill } from "@libs/skill";

export const Information = {
  title:
    "문제 해결이 집중하고, 새로운 기술 경험과 기록을 통해 효율성 고민하는 서버/백엔드 개발자",
  name: "김경남",
  position: "back-end developer",
  description: [
    "서버 개발자로서, 신규 서비스 개발과 유지보수를 통해 다양한 경험을 쌓았습니다.",
    "API 서버와 백오피스 프론트엔드, 미디어 스트리밍 서비스 개발을 포함해, 사내 업무를 지원하는 기능 연구개발을 수행했습니다.",
    "AWS 기반의 서비스 배포와 운영도 직접 관리한 경험이 있습니다.",
  ],
  email: "chaplet01@gmail.com",
  github: "https://github.com/kkn1125",
  blog: "https://kkn1125.github.io",
  age: new Date().getFullYear() - 1993,
  skill: {
    main: [Skill("javascript"), Skill("typescript"), Skill("nodejs")],
    sub: [Skill("java"), Skill("python")],
  },
  stacks: [
    Skill("linux"),
    Skill("awsEc2"),
    Skill("nginx"),
    Skill("jwt"),
    Skill("uwebsockets"),
    Skill("socketio"),
    Skill("nest"),
    Skill("fastify"),
    Skill("express"),
    Skill("mariadb"),
    Skill("mysql"),
    Skill("typeorm"),
    Skill("mybatis"),
    Skill("jenkins"),
    Skill("docker"),
    Skill("artillery"),
    Skill("jest"),
    Skill("vite"),
    Skill("vitest"),
    Skill("webpack"),
    Skill("gulp"),
    Skill("react"),
    Skill("bootstrap"),
    Skill("formik"),
    Skill("sass"),
    Skill("styledcomponent"),
    Skill("mui"),
    Skill("springboot"),
    Skill("webrtc"),
    Skill("swagger"),
    Skill("postman"),
    Skill("xterm"),
  ],
} as const;
export type Information = (typeof Information)[keyof typeof Information];
