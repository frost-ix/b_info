import { Category } from "@/interface/category";
import tempData from "@/template/dump.json";
import listData from "@/template/listDump.json";

function getCateTemplateData(): Category[] {
  const templateData: Category[] = JSON.parse(JSON.stringify(tempData));
  return templateData;
}

function getListTempData(): Category[] {
  const templateData: Category[] = JSON.parse(JSON.stringify(listData));
  return templateData;
}

export default { getCateTemplateData, getListTempData };
