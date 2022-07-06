import { Component, VNode } from 'vue'

export type ModalDialog = (
  options: {
    title: string
    renderComponent: renderComponent
    onConfirm: onConfirm
    top?: string
    hidePadding?: boolean
    dialogWidth?: string
    maxHeight?: string | number
    height?: string
    hideFooter?: boolean
    showClose?: boolean
  }
) => VNode

export type WidgetsPlugins = {
  $ModalDialog: ModalDialog
  visible?: boolean
}

export type ModalDialogOptions = {
  title: string
  renderComponent: renderComponent
  onConfirm: onConfirm
  top?: string
  hidePadding?: boolean
  dialogWidth?: string
  maxHeight?: string | number
  height?: string
  hideFooter?: boolean
  showClose?: boolean
}

export type renderComponent = {
  data: any
  component: Component
}

export type onConfirm = {
  (instance: any): Promise<any>
}

