import { DOCUMENT } from '@angular/common';
import { DestroyRef, Inject, Injectable, inject } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { TranslocoService } from '@jsverse/transloco';
import { delay, distinctUntilChanged, map, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  #transloco = inject(TranslocoService);
  #destroyRef = inject(DestroyRef);
  #document = inject(Document);
  isRtl = toSignal(
    this.#transloco.langChanges$.pipe(
      startWith(this.#transloco.getActiveLang() || 'en'),
      distinctUntilChanged(),
      map((lang) => lang === 'ar')
    )
  );

//   constructor(@Inject(DOCUMENT) private document: Document) {}

  initialize() {
    this.onLangChangeListener();
  }

  private onLangChangeListener() {
    this.#transloco.langChanges$.pipe(
      takeUntilDestroyed(this.#destroyRef),
      delay(300)
    ).subscribe((lang) => {
      console.log({ lang });
      this.setDocumentLangDir(lang);
    });
  }

  private setDocumentLangDir(lang: string) {
    this.#document.documentElement.lang = lang;
    this.#document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }

  get currentLang() {
    return this.#transloco.getActiveLang();
  }
}
