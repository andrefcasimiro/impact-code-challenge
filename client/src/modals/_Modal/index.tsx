import React, { Component } from 'react'
import {
  ModalWrapper,
  ModalContainer,
  ModalHeader,
  ModalContent,
  ModalTitle,
  ModalClose,
} from './styled'

type Props = {
  // @ts-ignore
  children: React.Node,
  title: string,
  close: any,
}

class Modal extends Component <Props, {modalRef: any}> {
  constructor(props) {
    super(props)

    this.state = {
      modalRef: React.createRef(),
    }

    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside(event) {
    if (
      this.state &&
      this.state.modalRef &&
      this.state.modalRef.current &&
      !this.state.modalRef.current.contains(event.target)
    ) {
      this.props.close()
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  render() {
    return (
      <ModalWrapper>
        <ModalContainer ref={this.state.modalRef}>
          <ModalHeader>
            <ModalTitle>
              {this.props.title || ""}
            </ModalTitle>
            <ModalClose onClick={this.props.close}>
                x
            </ModalClose>
          </ModalHeader>
          <ModalContent>
            {this.props.children}
          </ModalContent>
        </ModalContainer>
      </ModalWrapper>
    )
  }
}

export default Modal
