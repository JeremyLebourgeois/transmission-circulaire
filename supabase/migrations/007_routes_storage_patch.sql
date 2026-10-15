-- Autoriser tout le monde à VOIR les images (lecture)
CREATE POLICY "Images des routes publiques" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'routes_images');

-- Autoriser les utilisateurs connectés (vous) à AJOUTER des images
CREATE POLICY "Upload d'images pour les admins" 
ON storage.objects FOR INSERT 
TO authenticated 
WITH CHECK (bucket_id = 'routes_images');

-- Autoriser les utilisateurs connectés à MODIFIER les images
CREATE POLICY "Mise à jour d'images pour les admins" 
ON storage.objects FOR UPDATE 
TO authenticated 
USING (bucket_id = 'routes_images');

-- Autoriser les utilisateurs connectés à SUPPRIMER les images
CREATE POLICY "Suppression d'images pour les admins" 
ON storage.objects FOR DELETE 
TO authenticated 
USING (bucket_id = 'routes_images');
