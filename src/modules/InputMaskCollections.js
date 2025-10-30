import getAttrNameFromSelector from "@/utils/getAttrNameFromSelector"
import IMask from "imask"

const rootSelector = '[data-js-input-mask]'

class InputMask {
  selectors = {
    root: rootSelector,
  }

  constructor(rootElement) {
    this.rootElement = rootElement
    this.init()
  }

  init() {
    /**
     * Вытягиваем значение самого атрибута (data-js-input-mask)
     * Затем у rootElement получаем значение атрибута, то есть саму маску
     */
    const mask = this.rootElement.getAttribute(
      getAttrNameFromSelector(this.selectors.root),
    )

    IMask(this.rootElement, { mask })
  }
}

class InputMaskCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new InputMask(element)
    })
  }
}

export default InputMaskCollection