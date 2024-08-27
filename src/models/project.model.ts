import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { pathJoin } from "@libs/pathJoin";
import { Skill } from "@libs/skill";
import { Issue } from "./issue";
import { DEPLOY_PATH } from "@common/variables";
import { ImageObject } from "@libs/getResource";

export class ProjectModel {
  cover: string | null = null;
  github: string | null = null;
  demoSites: string[] | null = null;
  title: string;
  description: string[];
  roles: Role[];
  team: Team;
  company: Company;
  start: Date;
  end: Date | null = null;
  skills: Skill[];
  works: string[];
  path: string;
  relations: ProjectModel[] | null = null;
  isSideProject: boolean | null = null;
  issues: Issue[] | null = null;
  images: ImageObject[] | null = null;

  constructor({
    cover,
    github,
    demoSites,
    title,
    description,
    roles,
    team,
    company,
    start,
    end,
    skills,
    works,
    path,
    relations,
    isSideProject = false,
    issues,
    images,
  }: {
    cover: string | null;
    github: string | null;
    demoSites: string[] | null;
    title: string;
    description: string[];
    roles: Role[];
    team: Team;
    company: Company;
    start: Date;
    end: Date | null;
    skills: Skill[];
    works: string[];
    path: string;
    relations: ProjectModel[] | null;
    isSideProject: boolean | null;
    issues: Issue[] | null;
    images: ImageObject[] | null;
  }) {
    cover && (this.cover = cover);
    github && (this.github = github);
    demoSites && (this.demoSites = demoSites);
    this.title = title;
    this.description = description;
    this.roles = roles;
    this.team = team;
    this.company = company;
    this.start = start;
    end && (this.end = end);
    this.skills = skills;
    this.works = works;
    this.path = pathJoin(DEPLOY_PATH, "portfolio", path);
    relations && (this.relations = relations);
    isSideProject && (this.isSideProject = isSideProject);
    issues && (this.issues = issues);
    images && (this.images = images);
  }
}
