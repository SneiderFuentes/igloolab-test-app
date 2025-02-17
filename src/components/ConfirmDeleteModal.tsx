import React from 'react';
import { Modal, View, Text, StyleSheet, Button } from 'react-native';
import { Product } from '../interfaces/types';
import styles from '../styles/confirmDeleteModal.styles';

interface ConfirmDeleteModalProps {
  visible: boolean;
  product?: Product;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  visible,
  product,
  onConfirm,
  onCancel,
}) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onCancel}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Confirmar eliminación</Text>
          <Text style={styles.message}>
            ¿Desea eliminar el producto "{product?.name}"?
          </Text>

          <View style={styles.buttonRow}>
            <Button title="Cancelar" onPress={onCancel} />
            <Button title="Eliminar" onPress={onConfirm} color="#D9534F" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmDeleteModal;
