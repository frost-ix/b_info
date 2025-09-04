import { Category } from "@/interface/catetory";
import tempData from "@/template/dump.json";

function getCateTemplateData(): Category[] {
  const templateData: Category[] = JSON.parse(JSON.stringify(tempData));
  return templateData;
}

function getListTempData(): Category[] {
  const templateData: Category[] = JSON.parse(JSON.stringify(tempData));
  return templateData;
}

export { getCateTemplateData, getListTempData };
