import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { DailyLimit } from "@/type";

export const MAX_MESSAGES_PER_DAY = 10;
const STORAGE_KEY = "chat_daily_limit";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollToSection = (id: string, offset = 120) => {
  const element = document.getElementById(id);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

const getToday = () => {
  return new Date().toISOString().slice(0, 10);
};

export const canSendMessageToday = (): boolean => {
  const raw = localStorage.getItem(STORAGE_KEY);
  const today = getToday();

  if (!raw) {
    return true;
  }

  const data: DailyLimit = JSON.parse(raw);

  // new day → reset
  if (data.date !== today) {
    return true;
  }

  return data.count < MAX_MESSAGES_PER_DAY;
};

export const incrementMessageCountToday = () => {
  const raw = localStorage.getItem(STORAGE_KEY);
  const today = getToday();

  if (!raw) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ date: today, count: 1 })
    );
    return;
  }

  const data: DailyLimit = JSON.parse(raw);

  if (data.date !== today) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ date: today, count: 1 })
    );
    return;
  }

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ date: today, count: data.count + 1 })
  );
};

export const getTotalMessageCountToday = (): number => {
  const raw = localStorage.getItem(STORAGE_KEY);
  const today = getToday();

  if (!raw) {
    return 0;
  }

  const data: DailyLimit = JSON.parse(raw);

  // new day → reset
  if (data.date !== today) {
    return 0;
  }

  return data.count;
};
